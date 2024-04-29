import { NextResponse } from "next/server";
import User from "../../models/user";
import queryString from "query-string";
import Connection_db from "@/app/api/db/config"

export async function GET(request: Request) {
  Connection_db();
  const queryIndex = request.url.indexOf("?");
  const parsedd = queryString.parse(request.url.slice(queryIndex) || "");
  const userId = parsedd.userId;
  const user = await User.findOne({ _id: userId });
  
  return NextResponse.json(user);
}
