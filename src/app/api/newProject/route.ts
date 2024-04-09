import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Project } from "../../models/user";
import User from "../../models/user";
var bodyParser = require("body-parser");
// import { Request } from "express";
import { cookies } from "next/headers";
const jose = require("jose");

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: Request, res: NextApiResponse) {
  const token = cookies().get("jwtToken");
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jose.jwtVerify(token?.value, secret);
    const user = await User.findOne({ _id: decoded.payload.user.id });
    // console.log(user);
      const data: Project = await req.json();
      // console.log(data);
      
    const { title, description, categoryNumber, categories }: Project = data;

    const Newid = user.projects.length + 1;
    const NewProject: Project = {
      projectId: Newid,
      title: title,
      description: description,
      categoryNumber: categoryNumber,
      categories: categories,
      images: `public/uploads/${user.username}/${Newid}/Images`,
      annotations: `public/uploads/${user.username}/${Newid}/Annotations`,
    };
    // console.log(NewProject);

    user.projects.push(NewProject);
    await user.save();

    return Response.json({
      message: "Dummy project added successfully",
      status: 200,
      UpdatedUser : user,
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
