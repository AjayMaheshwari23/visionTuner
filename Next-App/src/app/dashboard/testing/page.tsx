"use client";
import { AutoComplete } from "antd";
import { Button } from "antd";
import Image from 'next/image';
import { EditOutlined } from "@ant-design/icons";
import street from './busy-street.jpg';
import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/annotation.css';
import { Checkbox, Select, Input } from 'antd';
const {Option} = Select;

interface Rectangle {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    name?: string;
}


const AnnotateTool = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rectangles, setRectangles] = useState<Rectangle[]>([]);
    const [selectedRectangle, setSelectedRectangle] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStartCoords, setDragStartCoords] = useState<{ x: number; y: number } | null>(null);
    const [resizeHandle, setResizeHandle] = useState<'nw' | 'ne' | 'sw' | 'se' | null>(null);
    const [resizeStartCoords, setResizeStartCoords] = useState<{ x: number; y: number } | null>(null);
    const [name, setName] = useState<string>('');
    const [showCoordinates, setShowCoordinates] = useState<boolean>(false);
    const [image,setImage] = useState<HTMLImageElement | null>(null);

    console.log(rectangles);
    useEffect(() => {
        const img = document.createElement('img') as HTMLImageElement;
        img.onload = () =>{
            setImage(img);
        };
        img.src = 'https://t3.ftcdn.net/jpg/02/73/65/86/360_F_273658630_xcbkwHvxdXh6HaY8lE6OeAEF7fHC67gt.jpg';
        
        console.log(img);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if(image){
                ctx.drawImage(image,0,0,canvas.width,canvas.height);
            }
            rectangles.forEach((rect) => {
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 3;
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
                if (rect.name) {
                    ctx.font = '10px Arial';
                    ctx.font = 'white';
                    ctx.fillText(rect.name, rect.x, rect.y - 5);
                }

                if (showCoordinates) {
                    ctx.font = '10px Arial';
                    ctx.fillText(`(${rect.x.toFixed(2)}, ${rect.y.toFixed(2)})`, rect.x, rect.y + rect.height + 10); // Top-left corner
                    ctx.fillText(`(${(rect.x + rect.width).toFixed(2)}, ${rect.y.toFixed(2)})`, rect.x + rect.width, rect.y + rect.height + 10); // Top-right corner
                    ctx.fillText(`(${(rect.x + rect.width).toFixed(2)}, ${(rect.y + rect.height).toFixed(2)})`, rect.x + rect.width, rect.y - 10); // Bottom-right corner
                    ctx.fillText(`(${rect.x.toFixed(2)}, ${(rect.y + rect.height).toFixed(2)})`, rect.x, rect.y - 10); // Bottom-left corner
                }
            });

        };

        render();

        // return () => {
        //     canvas.removeEventListener('mousedown', onMouseDown);
        //     canvas.removeEventListener('mousemove', onMouseMove);
        //     canvas.removeEventListener('mouseup', onMouseUp);
        // };
    }, [rectangles, showCoordinates]);

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
                setResizeHandle('se');
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
                    if (resizeHandle.includes('e')) newWidth += deltaX;
                    if (resizeHandle.includes('s')) newHeight += deltaY;
                    return { ...r, width: Math.max(0, newWidth), height: Math.max(0, newHeight) };
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
        const id = rectangles.length > 0 ? rectangles[rectangles.length - 1].id + 1 : 0;
        const newRectangle: Rectangle = {
            id,
            x: 0,
            y: 0,
            width: 20,
            height: 20,
            name,
        };
        setRectangles([...rectangles, newRectangle]);
        setName('');
    };

    const deleteRectangle = (id: number) => {
        const updatedRectangles = rectangles.filter((rect) => rect.id !== id);
        // if(id==0) return;
        setRectangles(updatedRectangles);
    };
    const items = [
        {
            value: 'Car',
        },
        {
            value: 'Bus',
        },
        {
            value: 'Cat',
        },
        {
            value: 'Dog'
        },
        {
            value: 'Person'
        }
    ];


    return (
        <div className="container">
            <div className='box'>
                <div className="btns">
                    <Button type='primary' className="prev" size='large'>Previous</Button>
                    <Button type='primary' className="edit" onClick={addRectangle} size='large'><EditOutlined /></Button>
                    <Button type='primary' className="next" size='large'>Next</Button>
                </div>
                <br/>
                <canvas ref={canvasRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    className='canvas'
                    height='300'
                    width='630'
                >
                    {/* <Image src={street} style={{ width: '100%', height: '330px' }} alt={""} /> */}
                </canvas>

                <div className="imageView">
                    <div className='content'>
                        <h3>Name: </h3>
                        <Select
                            placeholder='Object Name'
                            onChange={(e) => setName(e)}
                            style={{width:'60%'}}
                            allowClear
                        >
                            <Option value='Bus'>Bus</Option>
                            <Option value='Car'>Car</Option>
                            <Option value='Cat'>Cat</Option>
                            <Option value='Dog'>Dog</Option>
                            <Option value='Person'>Person</Option>
                        </Select>
                        {/* <input
                            id="nameInput"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ height: '30px', width: '50%', borderRadius: '20px', paddingLeft: '10px' }}
                        /> */}
                        
                        
                        <Checkbox checked={showCoordinates} onChange={(e) => setShowCoordinates(e.target.checked)}> Show Coordinates </Checkbox>
                    </div>
                    <br />

                    <div className="rectangle-list">
                        <h3> Delete Keys : </h3>
                        {rectangles.map((rect) => (
                            <div key={rect.id} className="yes">
                                {/* <span>{rect.name}</span> */}
                                <Button type='primary' onClick={() => deleteRectangle(rect.id)}>{rect.name}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnotateTool;

// -----------------------------------------------------------------------

