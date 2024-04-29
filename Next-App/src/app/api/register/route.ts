require("dotenv").config();
import { NextResponse } from "next/server";
import User from "../../models/user";
import { NextApiResponse } from "next";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers"
const jose = require('jose');
import Connection_db from "@/app/api/db/config";

Connection_db();

export function GET(request: Request) {
  const users = [
    {
      name: "Ajay",
      status: "Working...",
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
    const { username, email, password } = data;

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPass,
    });


    const already =
      (await User.findOne({ email: email })) ||
      (await User.findOne({ username: username }));
    if (already) {
      return NextResponse.json({
        message: "Username or Email Already taken",
        status: 400,
      });
    }

    await newUser.save();

    const JTdata = {
        user : {
        id:newUser.id
      }
    };


     const secret = new TextEncoder().encode(process.env.JWT_SECRET);

     const jwtToken = await new jose.SignJWT(JTdata)
       .setProtectedHeader({ alg: "HS256" })
       .sign(secret);

    cookies().set("jwtToken" , jwtToken);

    console.log("Successfully Registered & logged In");

    return NextResponse.json({
      message: "User registered successfully",
      status: 200,
      jwtToken:jwtToken
    });

  } catch (error: any) {
    console.error("Error during registration:", error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
