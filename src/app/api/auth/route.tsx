import { NextResponse } from "next/server";
import User from "../../models/user";
import querystring from "querystring";

export async function GET(request: Request) {
  const queryParams = querystring.parse(request.url.split("?")[1] || "");

  const userId = queryParams.userId as string; // Access userId from parsed query parameters


  const user = await User.findOne({ _id: userId });
  // console.log(userId);
  
  return NextResponse.json(user);
}
