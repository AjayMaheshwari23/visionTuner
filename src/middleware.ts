import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
import { Shadows_Into_Light_Two } from "next/font/google";
import { log } from "console";
const jose = require("jose");

export async function middleware(req: NextRequest) {
  console.log("request ayyi hai from " , req.url);

  if (cookies().has("jwtToken") === false) 
  {
    console.log("Login First");
    return NextResponse.redirect(new URL("/", req.url));
  }

  const token = cookies().get("jwtToken");
  try {

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jose.jwtVerify(token?.value,secret);
    // console.log(decoded)
    const userId = decoded.payload.user.id;
    if(userId == null) throw new Error("UnAuthorised Access")
    
  } catch (error: any) {
    console.log("Login First " + error.message);
    return NextResponse.redirect(new URL("/", req.url));
  }
}


export const config = {
  matcher: "/dashboard/:path*",
};