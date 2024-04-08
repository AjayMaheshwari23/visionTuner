import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import queryString from "query-string";
import { mkdirSync } from "fs";

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({
      message: "Method Other than POST is Not Allowed",
      status: 405,
    });
  }
  const queryIndex = req.url.indexOf("?");
  const parsedd = queryString.parse(req.url.slice(queryIndex) || "");
  const projectId = parsedd.projectId === null ? "RandomP" as string : parsedd.projectId as string;
  const userId = parsedd.userId === null ? "Random" as string : parsedd.userId as string;
  if (userId === "Random" || projectId === "RandomP") {
    return NextResponse.json(
      { message: "UserId or projectId is null" },
      { status: 400 }
    );
  }
  // console.log( {  userId , projectId} );
  const formData = await req.formData();

  const files: File[] = [];
  formData.forEach((value, key) => {
    if (key.startsWith("file") && value instanceof File) {
      files.push(value);
    }
  });
  // console.log(files);

  if (files.length === 0) {
    return NextResponse.json({
      message: "No files Recieved",
      status: 400,
    });
  }

  try {
    const userProjectPath = path.join(
      process.cwd(),
      "public/uploads",
      userId,
      projectId
    );

    mkdirSync(userProjectPath, { recursive: true });
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + "_" + file.name.replace(/ /g, "_");
        await writeFile(
          path.join(process.cwd(), `public/uploads`, userId , projectId, filename),
          buffer
        );
    }

    return NextResponse.json(
      { message: "Images uploaded successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
