// "use client";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function middleware(req: NextRequest) {
  console.log("request ayyi hai aayi hai from " , req.url);

  //const router = useRouter();
  if (cookies().has("jwtToken") === false) {
    //router.push("/");
    //return;
    return NextResponse.redirect(new URL("/", req.url));
    // return NextResponse.redirect(new URL("/", req.url));
  }

  const token = cookies().get("jwtToken");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded.user;
    // next();
  } catch (error: any) {
    return;
    // return NextResponse.redirect(new URL("/", req.url));
    // router.push("/");
  }
}


export const config = {
  matcher: "/dashboard/:path*",
};