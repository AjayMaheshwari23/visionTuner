require("dotenv").config();
import { NextResponse } from "next/server";
import User, { Project } from "../../models/user";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
const jose = require("jose");
import Connection_db from "@/app/api/db/config";
import { ImageObj } from "@/components/upload/UploadImage";

Connection_db();

export async function POST(request: Request, response: NextApiResponse) {
  try {
    // Log the incoming data
    console.log("Received data:", request.body);

    const data = await request.json();
    const { username, project, model_link } = data;

    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      throw new Error("User not found");
    }

    // Find the project with the given projectId in the user's projects array
    const projectIndex = user.projects.findIndex(
      (projectt: Project) => projectt.projectId === project.projectId
    );

    // Check if the project exists
    if (projectIndex === -1) {
      throw new Error("Project not found");
    }

    // Update the model field of the specified project
    user.projects[projectIndex].model = model_link;

    // Save the updated user document
    await user.save();

    return NextResponse.json({
      message: "Model Created and link Saved successfully",
      user:user
    });
  } catch (error: any) {
    // Log the error
    console.error("Error during Uploaded:", error.message);

    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
