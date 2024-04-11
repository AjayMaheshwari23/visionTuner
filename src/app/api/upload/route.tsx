import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import queryString from "query-string";
import Connection_db from "../db/config";

// Initialize Cloudinary
cloudinary.config({
  cloud_name: "dy3umrh6j",
  api_key: "165626741336352",
  api_secret: "iPd7u0Ros-dO93VDgfXVsfNxf5M",
});

// Initialize Database Connection
Connection_db();

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({
      message: "Method other than POST is not allowed",
      status: 405,
    });
  }

  const queryIndex = req.url.indexOf("?");
  const parsed = queryString.parse(req.url.slice(queryIndex) || "");
  const projectId = parsed.projectId || "RandomP";
  const userId = parsed.userId || "Random";

  if (userId === "Random" || projectId === "RandomP") {
    return NextResponse.json(
      { message: "UserId or projectId is null" },
      { status: 400 }
    );
  }

  const formData = await req.formData();

  const files: File[] = [];
  formData.forEach((value, key) => {
    if (key.startsWith("file") && value instanceof File) {
      files.push(value);
    }
  });

  if (files.length === 0) {
    return NextResponse.json({
      message: "No files received",
      status: 400,
    });
  }

  try {
    // Upload each file to Cloudinary
    const uploadPromises = files.map(async (file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          file,
          { folder: userId + "/" + projectId },
          (error, result) => {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              console.log("Cloudinary response:", result);
              // Log the Cloudinary response
              const imageUrl = result.secure_url;
              console.log("Image URL:", imageUrl);
              resolve(imageUrl);
            }
          }
        );
      });
    });

    const uploadedImages = await Promise.all(uploadPromises);

    return NextResponse.json(
      { message: "Images uploaded successfully", uploadedImages },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}