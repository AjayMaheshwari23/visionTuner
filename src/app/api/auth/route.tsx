import { NextResponse } from "next/server";
import User from "../../models/user";
import queryString from "query-string";

export async function GET(request: Request) {

  const queryIndex = request.url.indexOf("?");
  const parsedd = queryString.parse(request.url.slice(queryIndex) || "");
  const userId = parsedd.userId;
  const user = await User.findOne({ _id: userId });
  // console.log(userId);
  
  return NextResponse.json(user);
}
