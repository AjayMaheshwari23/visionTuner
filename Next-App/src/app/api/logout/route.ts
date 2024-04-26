import { NextApiResponse } from "next";
import { cookies } from "next/headers";
export async function POST(request: Request, response: NextApiResponse) 
{
    cookies().delete('jwtToken');
    return Response.json({ message: "Loggoed Out", status: 200 });
}