import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Project } from "../../models/user";
import User from "../../models/user";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const userEmail = "ajay@gmail.com";
    const user = await User.findOne({ email: userEmail });

    const dummyProject: Project = {
      projectId: 1,
      title: "Dummy Project 1",
      description: "This is a dummy project for testing 1.",
      categoryNumber: 2,
      categories: ["cat", "dog"],
      images: "/storage/images1",
      annotations: "storage/annotations1",
    };

    
    // user.projects.push(dummyProject);
    // await user.save();

    return Response.json({ message: "Dummy project added successfully", status: 200 });
    // res.status(200).json({ message: "Dummy project added successfully", user });
  } catch (error) {
    return Response.json({ message: "Internal Server Error", status: 200 });
    // res.status(200).json({ message: "ERROR " });
  }
}

export function GET(req: Request, res: NextApiResponse) {
  try {
    return NextResponse.json({ message: "Route Working Fine", status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 200 });
  }
}
