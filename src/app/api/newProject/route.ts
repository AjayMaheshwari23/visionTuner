import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Project } from "../../models/user";
import User from "../../models/user";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const userEmail = "VT@gmail.com";
    const user = await User.findOne({ email: userEmail });

    const dummyProject: Project = {
      projectId: 1,
      title: "Dummy Project",
      description: "This is a dummy project for testing.",
      categoryNumber: 2,
      categories: ["cat", "dog"],
      images: [],
      annotations: ["Annotation 1", "Annotation 2"],
    };

    user.projects.push(dummyProject);

    res.status(200).json({ message: "Dummy project added successfully", user });
  } catch (error) {
    res.status(200).json({ message: "ERROR ",  });
  }
}

export function GET(req: Request, res: NextApiResponse) {
  try {
    return NextResponse.json({ message: "Route Working Fine", status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 200 });
  }
}
