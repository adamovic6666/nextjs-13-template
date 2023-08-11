import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      blogs: [
        { title: "blog 1", author: "Author 1", description: "Description 1" },
        { title: "blog 2", author: "Author 2", description: "Description 2" },
      ],
    },
    { status: 200 }
  );
}
