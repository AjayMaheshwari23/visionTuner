import { NextResponse } from "next/server";
import User from "../../modals/user";
import { NextApiResponse } from "next";

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

    if (already.password !== password) {
      window.alert("Incorrect Credentials");
      return NextResponse.json({
        message: "Incorrect Credentials",
        status: 400,
      });
    }

    console.log("Successfully Logged in");

    return NextResponse.json({
      message: "User registered successfully",
      status: 200,
    });
  } catch (error: any) {
    console.error("Error during Login:", error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
