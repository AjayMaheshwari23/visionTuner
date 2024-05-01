"use client";
import { AutoComplete, message } from "antd";
import { Button } from "antd";
import Image from "next/image";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import street from "./busy-street.jpg";
import React, { Dispatch, useState, useEffect, useRef } from "react";
import "../../../styles/annotation.css";
import { Checkbox, Select, Input } from "antd";
import { ImageObj } from "@/components/upload/UploadImage";
import { Data } from "@/components/modal/modal";
import { AnnotationObj } from "@/app/models/user";

const { Option } = Select;

interface Rectangle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name?: string;
}

const clrs = [
  "yellow",
  "red",
  "blue",
  "green",
  "black",
  "white",
  "purple",
  "orange",
];

interface AnnotationProps {
  images: ImageObj[];
  data: Data;
  annotations: AnnotationObj[];
  setannotations: React.Dispatch<React.SetStateAction<AnnotationObj[]>>;
}

const base_image_url =
  "https://res.cloudinary.com/dy3umrh6j/image/upload/v1712834199/";

const Page = ({
  images,
  data,
  annotations,
  setannotations,
}: AnnotationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [selectedRectangle, setSelectedRectangle] = useState<number | null>(
    null
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartCoords, setDragStartCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [resizeHandle, setResizeHandle] = useState<
    "nw" | "ne" | "sw" | "se" | null
  >(null);
  const [resizeStartCoords, setResizeStartCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [idx, setidx] = useState(0);
  const [height, setheight] = useState(0);
  const [width, setwidth] = useState(0);

  const loadImage = () => {
    const img = document.createElement("img") as HTMLImageElement;
    img.onload = () => {
      setImage(img);
      const widthI = img.width;
      const heightI = img.height;
      setwidth(widthI);
      setheight(heightI);
    };
    const foundImage = images.find((ele) => ele.id == idx);
    img.src = base_image_url + foundImage?.url;
  };

  // UseEffect for loading the image
  useEffect(() => {
    loadImage();
  }, [idx]); // Run only when idx changes

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderRectangles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (image) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }

      rectangles.forEach((rect, idx) => {
        if (idx !== 0) {
          const ind = data.categories_list?.indexOf(rect.name);
          ctx.strokeStyle = clrs[ind === undefined ? 0 : ind];
          ctx.lineWidth = 3;
          const { x, y, width, height } = rect;
          ctx.strokeRect(x, y, width, height);

          if (rect.id) {
            ctx.font = "10px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(rect.id.toString(), rect.x, rect.y - 5);
          }
        }
      });
    };

    renderRectangles();
  }, [rectangles, image]);

  const onMouseDown: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    for (let i = rectangles.length - 1; i >= 0; i--) {
      const r = rectangles[i];
      const resizeHandleSize = 8;
      if (
        mouseX >= r.x + r.width - resizeHandleSize &&
        mouseX <= r.x + r.width &&
        mouseY >= r.y + r.height - resizeHandleSize &&
        mouseY <= r.y + r.height
      ) {
        setResizeHandle("se");
        setSelectedRectangle(r.id);
        setResizeStartCoords({ x: mouseX, y: mouseY });
        break;
      } else if (
        mouseX >= r.x &&
        mouseX <= r.x + r.width &&
        mouseY >= r.y &&
        mouseY <= r.y + r.height
      ) {
        setIsDragging(true);
        setSelectedRectangle(r.id);
        setDragStartCoords({ x: mouseX - r.x, y: mouseY - r.y });
        break;
      }
    }
  };

  // useEffect( () => {
  //     console.log(rectangles);

  // },[])

  const onMouseMove: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
    if (!isDragging && !resizeHandle) return;

    const canvas = canvasRef.current;
    if (!canvas || !selectedRectangle) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (isDragging && dragStartCoords) {
      const newX = mouseX - dragStartCoords.x;
      const newY = mouseY - dragStartCoords.y;
      const updatedRectangles = rectangles.map((r) =>
        r.id === selectedRectangle ? { ...r, x: newX, y: newY } : r
      );
      setRectangles(updatedRectangles);
    }

    if (resizeHandle && resizeStartCoords) {
      const deltaX = mouseX - resizeStartCoords.x;
      const deltaY = mouseY - resizeStartCoords.y;
      const updatedRectangles = rectangles.map((r) => {
        if (r.id === selectedRectangle) {
          let newWidth = r.width;
          let newHeight = r.height;
          if (resizeHandle.includes("e")) newWidth += deltaX;
          if (resizeHandle.includes("s")) newHeight += deltaY;
          return {
            ...r,
            width: Math.max(0, newWidth),
            height: Math.max(0, newHeight),
          };
        }
        return r;
      });
      setRectangles(updatedRectangles);
      setResizeStartCoords({ x: mouseX, y: mouseY });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setResizeHandle(null);
  };

  const addRectangle = () => {
    const id =
      rectangles.length > 0 ? rectangles[rectangles.length - 1].id + 1 : 0;
    if (name == "") {
      message.warning("Please select a category");
      return;
    }
    const newRectangle: Rectangle = {
      id,
      x: 0,
      y: 0,
      width: 20,
      height: 20,
      name,
    };
    setRectangles([...rectangles, newRectangle]);
  };

  const deleteRectangle = (id: number) => {
    const updatedRectangles = rectangles.filter((rect) => rect.id !== id);
    // if(id==0) return;
    setRectangles(updatedRectangles);
  };

  const nextfun = (ok: boolean) => {
    console.log(rectangles);
    const updatedAnnotations = [...annotations];

    rectangles.slice(1).forEach((rect) => {
      // ele has x,y,height,width,id
      const cx = (rect.x + rect.width / 2) / width;
      const cy = (rect.y + rect.height / 2) / height;
      const nw = rect.width / width;
      const nh = rect.height / height;
      // Do cx, cy, nw, nh
      console.log("Normalized coordinates:", { cx, cy, nw, nh });
      const imageId = images[idx].id;
      const annotationIdx = updatedAnnotations.findIndex(
        (annotation) => annotation.id === imageId
      );
      if (annotationIdx !== -1) {
        // AnnotationObj found, update its coordinates
        const cx = (rect.x + rect.width / 2) / width;
        const cy = (rect.y + rect.height / 2) / height;
        const nw = rect.width / width;
        const nh = rect.height / height;
        var clsIndex = -1;
        data.categories_list?.forEach((ele, index) => {
          if (ele == name) clsIndex = index;
        });

        updatedAnnotations[annotationIdx].coordinates.push({
          class: clsIndex == undefined ? 0 : clsIndex,
          tl: cx,
          tr: cy,
          bl: nw,
          br: nh,
        });
      } else {
        console.error(`AnnotationObj not found for image id: ${imageId}`);
      }
      setannotations(updatedAnnotations);
    });
    if (ok) {
      setRectangles([]);
      setidx((idx) => idx + 1);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="btns">
          <Button
            type="primary"
            disabled={idx == 0}
            className="prev"
            size="large"
            onClick={() => setidx((idx) => idx - 1)}
          >
            Previous
          </Button>
          <Button
            type="primary"
            className="edit"
            onClick={addRectangle}
            size="large"
          >
            <PlusOutlined />
          </Button>
          <Button
            type="primary"
            disabled={idx == images.length - 1}
            className="next"
            size="large"
            onClick={() => nextfun(true)}
          >
            Next
          </Button>
        </div>
        <br />
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          className="canvas"
          height="300"
          width="630"
        >
          {/* <Image src={street} style={{ width: '100%', height: '330px' }} alt={""} /> */}
        </canvas>

        <div className="imageView">
          <div className="content">
            <h3>Name: </h3>
            <Select
              placeholder="Object Name"
              onChange={(e) => setName(e)}
              style={{ width: "60%" }}
              allowClear
            >
              {data.categories_list?.map((ele, odx) => {
                return (
                  <Option key={odx} value={ele}>
                    {ele}
                  </Option>
                );
              })}
            </Select>
          </div>
          {/* <Checkbox
              checked={showCoordinates}
              onChange={(e) => setShowCoordinates(e.target.checked)}
            >
              Show Coordinates
            </Checkbox> */}
          <br />

          <div className="rectangle-list">
            <h3> Delete Keys : </h3>
            {rectangles.slice(1).map((rect) => (
              <div key={rect.id} className="yes">
                {/* <span>{rect.name}</span> */}
                <Button type="primary" onClick={() => deleteRectangle(rect.id)}>
                  {rect.name + " : " + rect.id}
                </Button>
              </div>
            ))}
          </div>
          <div className="doneDiv">
            <Button
              style={{ backgroundColor: "rgba(31,156,9,1)" , color:"white" }}
              onClick={() => nextfun(false)}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
// -----------------------------------------------------------------------
