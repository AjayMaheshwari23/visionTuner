"use client";
// import { useState, useEffect } from "react";
// import { ImageObj } from "../../../components/upload/UploadImage";
// import '../../../styles/annotation.css'
// import { Button} from "antd";
// import Image from 'next/image';
// import { EditOutlined } from "@ant-design/icons";
// import street from './busy-street.jpg';

// interface AnnotationProps {
//     images: ImageObj[];
//     setImages: React.Dispatch<React.SetStateAction<ImageObj[]>>
// }


// const AnnotateTool = () => {
//     return (
//         <div className="container">
//             <div className='box'>
//                 <div className="btns">
//                     <Button type='primary' className="prev" size='large'>Previous</Button>
//                     <Button type='primary' className="edit" size='large'><EditOutlined /></Button>
//                     <Button type='primary' className="next" size='large'>Next</Button>
//                 </div>
//                 <br/>
//                 <div className="imageView">
//                     <Image src={street} style={{ width: '100%',height:'330px'}} alt={""}/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AnnotateTool;

import React, { useEffect, useRef, useState } from 'react';

interface Rectangle {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    name?: string;
}

const AnnotationTool: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rectangles, setRectangles] = useState<Rectangle[]>([]);
    const [selectedRectangle, setSelectedRectangle] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const [dragStartCoords, setDragStartCoords] = useState<{ x: number; y: number } | null>(null);
    const [resizeStartCoords, setResizeStartCoords] = useState<{ x: number; y: number } | null>(null);
    const [mouseCoords, setMouseCoords] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rectangles.forEach((rect) => {
                ctx.strokeStyle = selectedRectangle === rect.id ? 'red' : 'blue';
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
                if (rect.name) {
                    ctx.font = '12px Arial';
                    ctx.fillText(rect.name, rect.x + 5, rect.y + 15);
                }
            });
        };

        render();

        return () => {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('mouseup', onMouseUp);
        };
    }, [rectangles, selectedRectangle]);

    const onMouseDown = (event: MouseEvent) => {
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
                setIsResizing(true);
                setSelectedRectangle(r.id);
                setResizeStartCoords({ x: mouseX, y: mouseY });
                break;
            } else if (mouseX >= r.x && mouseX <= r.x + r.width && mouseY >= r.y && mouseY <= r.y + r.height) {
                setIsDragging(true);
                setSelectedRectangle(r.id);
                setDragStartCoords({ x: mouseX - r.x, y: mouseY - r.y });
                break;
            }
        }
    };

    const onMouseMove = (event: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        setMouseCoords({ x: mouseX, y: mouseY });

        if (isDragging && selectedRectangle !== null && dragStartCoords) {
            const newX = mouseX - dragStartCoords.x;
            const newY = mouseY - dragStartCoords.y;
            const updatedRectangles = rectangles.map((r) =>
                r.id === selectedRectangle ? { ...r, x: newX, y: newY } : r
            );
            setRectangles(updatedRectangles);
        }

        if (isResizing && selectedRectangle !== null && resizeStartCoords) {
            const deltaX = mouseX - resizeStartCoords.x;
            const deltaY = mouseY - resizeStartCoords.y;
            const updatedRectangles = rectangles.map((r) => {
                if (r.id === selectedRectangle) {
                    return {
                        ...r,
                        width: r.width + deltaX,
                        height: r.height + deltaY,
                    };
                }
                return r;
            });
            setResizeStartCoords({ x: mouseX, y: mouseY });
            setRectangles(updatedRectangles);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
        setSelectedRectangle(null);
        setDragStartCoords(null);
        setResizeStartCoords(null);
    };

    const addRectangle = (x: number, y: number, width: number, height: number) => {
        const id = rectangles.length > 0 ? rectangles[rectangles.length - 1].id + 1 : 0;
        const newRectangle: Rectangle = { id, x, y, width, height };
        setRectangles([...rectangles, newRectangle]);
    };

    const handleAddRectangleClick = () => {
        const x = Math.random() * (canvasRef.current!.width - 100);
        const y = Math.random() * (canvasRef.current!.height - 100);
        addRectangle(x, y, 100, 100);
    };

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>, rectangleId: number) => {
        const updatedRectangles = rectangles.map((r) => {
            if (r.id === rectangleId) {
                return {
                    ...r,
                    name: event.target.value,
                };
            }
            return r;
        });
        setRectangles(updatedRectangles);
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            ></canvas>
            <button onClick={handleAddRectangleClick}>Add Rectangle</button>
            {selectedRectangle !== null && (
                <div>
                    <p>
                        Selected Rectangle: ({mouseCoords?.x}, {mouseCoords?.y})
                    </p>
                    <label htmlFor="rectangleName">Name:</label>
                    <input
                        id="rectangleName"
                        type="text"
                        value={rectangles.find((r) => r.id === selectedRectangle)?.name || ''}
                        onChange={(event) => handleNameInputChange(event, selectedRectangle)}
                    />
                </div>
            )}
        </div>
    );
};

export default AnnotationTool;

