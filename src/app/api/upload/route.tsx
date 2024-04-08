import { NextResponse } from "next/server";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { writeFile } from "fs/promises";

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({
      message: "Method Other than POST is Not Allowed",
      status: 405,
    });
  }

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
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + "_" + file.name.replace(/ /g, "_");
      await writeFile(
        path.join(process.cwd(), "public/uploads", filename),
        buffer
      );
    }

    return NextResponse.json(
      { message: "Images uploaded successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({error});
  }
}
