import os
import tempfile
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
import yaml
from ultralytics import YOLO
from flask import send_file

model_path = "yolov8n.pt"

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Base URL for the images
base_image_url = "https://res.cloudinary.com/dy3umrh6j/image/upload/v1712834199/"

@app.route('/api/train', methods=['POST'])
def handle_data():
    try:
        data = request.json
        # (data['project'])
        username = data['username']
        projectId = str( data['project']['projectId'] )
        annotations = data['project']['annotations']

        # Create temporary directories
        base_url = os.path.join(tempfile.gettempdir(), username , projectId , 'images' )
        base_url_Ann = os.path.join(tempfile.gettempdir(), username , projectId , 'labels' )
        paths_arr = [ 'train' , 'valid' , 'test' ]

        data_yaml_path = "data.yaml"

        # Update data.yaml with new paths
        with open(data_yaml_path, 'r') as file:
            data2 = yaml.safe_load(file)

        new_train_path = os.path.join(base_url,'train')
        new_val_path = os.path.join(base_url,'valid')
        new_test_path = os.path.join(base_url,'test')
        
        new_train_path_An = os.path.join(base_url_Ann,'train')
        new_val_path_An = os.path.join(base_url_Ann,'valid')
        new_test_path_An = os.path.join(base_url_Ann,'test')

        data2['train'] = new_train_path
        data2['test'] = new_test_path
        data2['val'] = new_val_path
        data2['nc'] = data['project']['categoryNumber']
        data2['names'] = data['project']['categories']

        with open(data_yaml_path, 'w') as file:
            yaml.dump(data2, file)

        # Ensure directories exist
        os.makedirs(new_train_path, exist_ok=True)
        os.makedirs(new_val_path, exist_ok=True)
        os.makedirs(new_test_path, exist_ok=True)
        
        os.makedirs(new_train_path_An, exist_ok=True)
        os.makedirs(new_val_path_An, exist_ok=True)
        os.makedirs(new_test_path_An, exist_ok=True)
        
        # print(data['project']['images'])
        # print(data['project']['annotations'])
        # print(data)
        # print("\n----\n")
        # Download and save images
        cnt = 0
        images_data = data['project']['images']
        # print(len(images_data))
        for image in images_data:
            cur_path = paths_arr[cnt%3]
            image_url = f"{base_image_url}{image['url']}"
            image_filename = os.path.join( os.path.join(base_url,cur_path)  , f"image_{image['id']}.jpg")
            download_and_save_file(image_url, image_filename)

            image_id = image['id']
            annotation_filename = os.path.join( os.path.join(base_url_Ann,cur_path), f"image_{image_id}.txt")

            # Find annotations for this image
            matching_annotations = [annotation for annotation in annotations if annotation['id'] == image_id]
            cnt+=1
            # Write coordinates to text file
            with open(annotation_filename, 'w') as annotation_file:
                for annotation_data in matching_annotations:
                    coordinates = annotation_data['coordinates']
                    for coordinate in coordinates:
                        annotation_file.write(f"0 {coordinate['tl']} {coordinate['tr']} {coordinate['bl']} {coordinate['br']}\n")

            print(f"Annotation downloaded and saved to: {annotation_filename}")

        # YOLO : Don't Forget to Uncomment ME !!
        model = YOLO('yolov8n.pt')
        results = model.train(data='data.yaml',epochs=1)
        # print(results)
        model_path = 'runs/detect/train/weights/last.pt'
        model_link = f'http://localhost:5000/{model_path}'
        
        return jsonify({'model_link': model_link}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def download_and_save_file(url, filename):
    response = requests.get(url)
    # print(response)
    with open(filename, 'wb') as file:
        file.write(response.content)

if __name__ == '__main__':
    app.run(debug=True)