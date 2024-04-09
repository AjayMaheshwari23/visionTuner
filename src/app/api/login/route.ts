import { NextResponse } from "next/server";
import User from "../../models/user";
import { NextApiResponse } from "next";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
const jose = require("jose");
import Connection_db from "@/app/api/db/config";
Connection_db();

export function GET(request: Request) {
  const users = [
    {
      name: "Ajay",
      mood: "Working...",
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
    const { username, password } = data;
    const newUser = new User({
      username,
      password,
    });

    // console.log(newUser.username , newUser.email , newUser.password);

    const already = await User.findOne({ username: username });
    if (!already) {
      window.alert("User Does not exist");
      return NextResponse.json({ message: "User Does not exist", status: 400 });
    }

    const ok = await bcrypt.compare(password, already.password);

    if (!ok) {
      console.log("Incorrect Credentials");
      return NextResponse.json({
        message: "Incorrect Credentials",
        status: 400,
      });
    }

    const dataT = {
      user: {
        id: already.id,
      },
    };

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const jwtToken = await new jose.SignJWT(dataT)
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);
      
    // const jwtToken = jwt.sign(dataT, process.env.JWT_SECRET);
    const oneday = 24 * 60 * 60 * 1000;
    cookies().set("jwtToken", jwtToken, {
      // expires: Date.now() - oneday,
    });

    console.log("Successfully Logged in");

    return NextResponse.json({
      message: "User Logged in successfully",
      status: 200,
      user:already
    });
  } catch (error: any) {
    console.error("Error during Login:", error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
