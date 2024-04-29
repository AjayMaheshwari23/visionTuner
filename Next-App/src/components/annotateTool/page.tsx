"use client";
// import "./page.css";
import { useState, useEffect } from "react";
import { ImageObj } from "../upload/UploadImage";

interface AnnotationProps {
  images: ImageObj[];
  setImages : React.Dispatch<React.SetStateAction<ImageObj[]>>
}

const append = "https://res.cloudinary.com/dy3umrh6j/image/upload/v1712834199/";

const AnnotateTool = ({ images , setImages }: AnnotationProps) => {
  const [idx, setIdx] = useState(0);
  const [rectStart, setRectStart] = useState({ x: 0, y: 0 });
  const [rectEnd, setRectEnd] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedTool, setSelectedTool] = useState("pen");
  const [annotationType, setAnnotationType] = useState("");
  const [annotations, setAnnotations] = useState<any[]>([]);

  const handleToolChange = (tool: string) => {
    setSelectedTool(tool);
  };

  const handleAnnotationTypeChange = (type: string) => {
    setAnnotationType(type);
  };

  const handleAddAnnotation = () => {
    if (annotationType && isDrawing) {
      const newAnnotation = {
        type: annotationType,
        startX: rectStart.x,
        startY: rectStart.y,
        endX: rectEnd.x,
        endY: rectEnd.y,
      };
      setAnnotations([...annotations, newAnnotation]);
      setIsDrawing(false);
    }
  };

   images = [
     { url: "visionTuner/bruasunpcwoplrd3l78l", id: 0 },
     { url: "visionTuner/cvrvsit7jmmewjhbjhtl", id: 1 },
   ];

   images = images.map((element) => ({
     ...element,
     url: `${append}${element.url}`,
   }));

   setImages(images);


  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const image = document.getElementById("source") as HTMLImageElement;

    const drawImage = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(
        canvas.width / image.width,
        canvas.height / image.height
      );
      const offsetX = (canvas.width - image.width * scale) / 2;
      const offsetY = (canvas.height - image.height * scale) / 2;
      ctx.drawImage(
        image,
        offsetX,
        offsetY,
        image.width * scale,
        image.height * scale
      );
      drawAnnotations();
    };

    const drawAnnotations = () => {
      annotations.forEach((annotation) => {
        if (annotation.type === "rectangle") {
          ctx.strokeStyle = "red";
          ctx.strokeRect(
            annotation.startX,
            annotation.startY,
            annotation.endX - annotation.startX,
            annotation.endY - annotation.startY
          );
        }
      });
    };

    image.addEventListener("load", drawImage);

    return () => {
      image.removeEventListener("load", drawImage);
    };
  }, [annotations,idx]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (selectedTool === "pen") {
      setRectStart({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
      setIsDrawing(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing && selectedTool === "pen") {
      setRectEnd({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  };

  const handleMouseUp = () => {
    if (selectedTool === "pen") {
      setIsDrawing(false);
      handleAddAnnotation();
    }
  };

  return (
    <>
      <h1>Annotate Software</h1>
      <div>
        <div>
          <button onClick={() => setIdx(idx - 1)} disabled={idx === 0}>
            Prev
          </button>
          <button
            onClick={() => {
              setIdx(idx + 1);
              console.log("Moved to Next IMage");
              console.log(images[idx]);
              
              
            }}
            disabled={idx === images.length - 1}
          >
            Next
          </button>
          <button onClick={() => handleToolChange("pen")}> Pen </button>
          <button onClick={() => handleToolChange("rectangle")}>
            {" "}
            Rectangle{" "}
          </button>
          {selectedTool === "rectangle" && (
            <select
              onChange={(e) => handleAnnotationTypeChange(e.target.value)}
            >
              <option value="">Select annotation type</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          )}
        </div>
        <canvas
          id="canvas"
          width={400}
          height={400}
          style={{ pointerEvents: "auto", border: "1px solid black" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        ></canvas>
        <div style={{ display: "none" }}>
          <img
            id="source"
            key={idx}
            src={images[idx].url}
            width={250}
            height={250}
            alt={`Image ${idx}`}
          />
        </div>
      </div>
    </>
  );
};

export default AnnotateTool;
