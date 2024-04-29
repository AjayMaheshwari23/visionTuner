require("dotenv").config();
import { NextResponse } from "next/server";
import User from "../../models/user";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
const jose = require("jose");
import Connection_db from "@/app/api/db/config";
import { ImageObj } from "@/components/upload/UploadImage";

Connection_db();

export async function POST(request: Request, response: NextApiResponse) {
  try {
    console.log("Received data:", request.body);

    const data: ImageObj[] = await request.json();

    console.log("Parsed data:", data);
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    console.log("Images Uploaded successfully");

    return NextResponse.json({
      message: "Images Uploaded successfully",
    });
  } catch (error: any) {
    console.error("Error during Uploaded:", error.message);

    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
