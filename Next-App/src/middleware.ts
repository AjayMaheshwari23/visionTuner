import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
import { Shadows_Into_Light_Two } from "next/font/google";
import { log } from "console";
const jose = require("jose");

export async function middleware(req: NextRequest) {

  if (cookies().has("jwtToken") === false) 
  {
    console.log("Login First");
    return NextResponse.redirect(new URL("/", req.url));
  }

  const token = cookies().get("jwtToken");
  try {

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jose.jwtVerify(token?.value,secret);
    
  } catch (error: any) {
    console.log("Login First " + error.message);
    return NextResponse.redirect(new URL("/", req.url));
  }
}


export const config = {
  matcher: "/dashboard/:path*",
};