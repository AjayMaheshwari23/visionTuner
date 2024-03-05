import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
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

    // const decoded = jwt.verify(token?.value, process.env.JWT_SECRET);
    // console.log("res = " + decoded);
    //console.log("dotenV = " + process.env.JWT_SECRET);
  } catch (error: any) {
    console.log("Login First " + error.message);
    return NextResponse.redirect(new URL("/", req.url));
  }
}


export const config = {
  matcher: "/dashboard/:path*",
};