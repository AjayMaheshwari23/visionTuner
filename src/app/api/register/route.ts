import { NextResponse } from "next/server";
import User from "../../models/user";
import { NextApiRequest, NextApiResponse } from "next";

export function GET(request: NextApiRequest) {
  const users = [
    {
      name: "Ajay",
      status: "working...",
    },
  ];
  return NextResponse.json(users);
}

type REgister = {
  username?: string;
  email?: string;
  password?: string;
};

export async function POST(request: Request, response: NextApiResponse) {
  try {
    const data: REgister = await request.json();
    const  { username , email , password } = data;
    const newUser = new User({
      username,
      email,
      password,
    });

    // console.log(newUser.username , newUser.email , newUser.password);

    const already =
      (await User.findOne({ email: email })) ||
      (await User.findOne({ username: username }));
    if (already) {
      return NextResponse.json({ message: "Username or Email Already taken", status: 200 });
    }

    await newUser.save();
    console.log("Successfully Registered");

    return NextResponse.json({
      message: "User registered successfully",
      status: 200,
    });
  } catch (error: any) {
    console.error("Error during registration:", error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}