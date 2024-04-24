import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Project } from "../../models/user";
import User from "../../models/user";
import { cookies } from "next/headers";
const jose = require("jose");
import Connection_db from "@/app/api/db/config";
import queryString from "query-string";
Connection_db();

export async function POST(req: Request, res: NextApiResponse) {
  const token = cookies().get("jwtToken"); // console.log(token);

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jose.jwtVerify(token?.value, secret);
    const user = await User.findOne({ _id: decoded.payload.user.id });
    // console.log(user);
    const data: Project = await req.json();
    console.log(data);

    const {
      title,
      description,
      categoryNumber,
      categories,
      images,
      annotations,
      model,
      createdAt,
    }: Project = data;

    const Newid = user.projects.length + 1;
    const NewProject: Project = {
      projectId: Newid,
      title: title,
      description: description,
      categoryNumber: categoryNumber,
      categories: categories,
      images: images,
      annotations: annotations,
      model: model,
      createdAt: createdAt,
    };
    console.log(NewProject);

    user.projects.push(NewProject);
    await user.save();
    
    return Response.json({
      message: "Dummy project added successfully",
      status: 200,
      UpdatedUser: user,
    });
  } catch (error) {
    console.log(error);

    return Response.json({ message: "Internal Server Error", status: 400 });
  }
}

export function GET(req: Request, res: NextApiResponse) {
  try {
    return NextResponse.json({ message: "Route Working Fine", status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 200 });
  }
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const token = cookies().get("jwtToken");
  // console.log(token?.value);
  // console.log(token);

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jose.jwtVerify(token?.value, secret);
    const user = await User.findOne({ _id: decoded.payload.user.id });

    const queryIndex = req.url.indexOf("?");
    const parsedd = queryString.parse(req.url.slice(queryIndex) || "");
    const projectId = parsedd.projectId as unknown as number;
    // console.log(projectId);

    // Find the index of the project with the given project ID
    const projectIndex = user.projects.findIndex(
      (project: Project) => project.projectId == projectId
    );
    if (projectIndex === -1) {
      return NextResponse.json({
        message: "Project not found",
        status: 404,
        user: user,
      });
    }

    // Remove the project from the user's projects array
    user.projects.splice(projectIndex, 1);
    await user.save();

    return NextResponse.json({
      message: "Project deleted successfully",
      status: 200,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
