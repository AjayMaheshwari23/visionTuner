import os
import tempfile
import requests
from flask import Flask, jsonify, request , send_from_directory,abort,current_app
from flask_cors import CORS
import yaml
from ultralytics import YOLO
from flask import send_file
import shutil
import torch
from torchvision import transforms
from PIL import Image
import requests
from io import BytesIO

model_path = "yolov8n.pt"

app = Flask(__name__)
CORS(app)


base_image_url = "https://res.cloudinary.com/dy3umrh6j/image/upload/v1712834199/"


DOWNLOAD_DIRECTORY = ""

@app.route('/get-files/<path:path>',methods = ['GET','POST'])
def get_files(path):
    try:
        return send_from_directory(DOWNLOAD_DIRECTORY, path, as_attachment=True)
    except FileNotFoundError:
        abort(404)

# ["F1_curve.png","F1_curve.png","P_curve.png","R_curve.png","PR_curve.png","confusion_matrix.png"]


# Predict route
# Define image transformation
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# @app.route('/predict', methods=['POST'])
# def predict_image():
#     print("Hello " + request)
#     # Check if request contains file data
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image provided'})


#     model = torch.load("last.pt", map_location=torch.device('cpu'))
#     model.eval()

#     # Get the uploaded image file
#     image_file = request.files['image']

#     # Read the image file
#     image = Image.open(image_file)

#     # Preprocess the image
#     image = transform(image).unsqueeze(0)

#     # Make prediction
#     with torch.no_grad():
#         output = model(image)
#         # Here you can process the output as required

#     # Convert tensor output to list
#     predicted_images = [output.tolist()]

#     # Return the predicted images as a response
#     return jsonify({'predicted_images': predicted_images})

# Define image transformation
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),  # Resize the image to 224x224
#     transforms.ToTensor(),  # Convert the image to a PyTorch tensor
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # Normalize the image
# ])

loaded_model = None

def load_model(model_path):
    global loaded_model
    if loaded_model is None:
        loaded_model = torch.load(model_path)
        loaded_model.eval()


@app.route('/predict',methods = ['GET','POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    # image_file = request.files['image']
    # image = Image.open(image_file)
    # image = transform(image).unsqueeze(0) 

    load_model("./ajay/0/last.pt")

    # with torch.no_grad():
    #     output = model(image)
    print("Image received and processing...")

    return jsonify({'predicted_images': 'Done'})



def delete_runs_directory():
    runs_directory = os.path.join(current_app.root_path, 'runs')
    
    if os.path.exists(runs_directory):
        shutil.rmtree(runs_directory)
        print("Deleted 'runs' directory")


def move_files(username, projectId):
    source_directory = os.path.join(current_app.root_path, 'runs', 'detect', 'train')
    destination_directory = os.path.join(current_app.root_path, username, projectId)

    os.makedirs(destination_directory, exist_ok=True)

    # files_to_move = ["F1_curve.png", "F1_curve.png", "P_curve.png", "R_curve.png", "PR_curve.png", "confusion_matrix.png"]
    files_to_move = ["results.png", "labels.jpg", "confusion_matrix_normalized.png", "labels_correlogram.jpg"]


    for file_name in files_to_move:
        source_file_path = os.path.join(source_directory, file_name)
        destination_file_path = os.path.join(destination_directory, file_name)

        if os.path.exists(source_file_path):
            shutil.move(source_file_path, destination_file_path)
            print(f"Moved '{file_name}' to {destination_file_path}")
        else:
            print(f"File '{file_name}' not found at {source_file_path}")


def move_last_pt_file(username,projectId):
    
    last_pt_file = os.path.join(current_app.root_path, 'runs', 'detect', 'train', 'weights', 'last.pt')

    if os.path.exists(last_pt_file):
        destination_directory = os.path.join(current_app.root_path, username, projectId)
        print(projectId + "  -> " + destination_directory)
        os.makedirs(destination_directory, exist_ok=True)  # exist dekh lena 
        destination_file = os.path.join(destination_directory, 'last.pt')
        shutil.move(last_pt_file, destination_file)
        print("Moved 'last.pt' file to", destination_file)
        move_files(username, projectId)

@app.route('/api/train', methods=['POST'])
def handle_data():
    try:
        data = request.json
        print(data)
        username = data['username']
        projectId = str( data['project']['projectId'] )
        annotations = data['project']['annotations']

        
        base_url = os.path.join(tempfile.gettempdir(), username , projectId , 'images' )
        base_url_Ann = os.path.join(tempfile.gettempdir(), username , projectId , 'labels' )
        paths_arr = [ 'train' , 'valid' , 'test' ]

        data_yaml_path = "data.yaml"

        
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

        
        os.makedirs(new_train_path, exist_ok=True)
        os.makedirs(new_val_path, exist_ok=True)
        os.makedirs(new_test_path, exist_ok=True)
        
        os.makedirs(new_train_path_An, exist_ok=True)
        os.makedirs(new_val_path_An, exist_ok=True)
        os.makedirs(new_test_path_An, exist_ok=True)
       
        cnt = 0
        images_data = data['project']['images']
        
        for image in images_data:
            cur_path = paths_arr[cnt%3]
            image_url = f"{base_image_url}{image['url']}"
            image_filename = os.path.join( os.path.join(base_url,cur_path)  , f"image_{image['id']}.jpg")
            download_and_save_file(image_url, image_filename)

            image_id = image['id']
            annotation_filename = os.path.join( os.path.join(base_url_Ann,cur_path), f"image_{image_id}.txt")

            
            matching_annotations = [annotation for annotation in annotations if annotation['id'] == image_id]
            cnt+=1

            
            with open(annotation_filename, 'w') as annotation_file:
                for annotation_data in matching_annotations:
                    coordinates = annotation_data['coordinates']
                    for coordinate in coordinates:
                        annotation_file.write(f"0 {coordinate['tl']} {coordinate['tr']} {coordinate['bl']} {coordinate['br']}\n")

            print(f"Annotation downloaded and saved to: {annotation_filename}")

        
        model = YOLO('yolov.pt')
        results = model.train(data='data.yaml',epochs=10)
        
        move_last_pt_file(username,projectId)
        delete_runs_directory()
        model_link = f"{username}/{projectId}/last.pt"
        
        return jsonify({'model_link': model_link}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def download_and_save_file(url, filename):
    response = requests.get(url)
    with open(filename, 'wb') as file:
        file.write(response.content)

if __name__ == '__main__':
    app.run(debug=True)
