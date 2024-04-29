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
    console.log("Received data:", request.body);

    const data = await request.json();
    const { username, project, model_link } = data;

    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    const projectIndex = user.projects.findIndex(
      (projectt: Project) => projectt.projectId === project.projectId
    );

    if (projectIndex === -1) {
      throw new Error("Project not found");
    }

    user.projects[projectIndex].model = model_link;

    await user.save();

    return NextResponse.json({
      message: "Model Created and link Saved successfully",
      user:user
    });
  } catch (error: any) {
    console.error("Error during Uploaded:", error.message);

    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
