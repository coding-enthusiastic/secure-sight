import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id } = await body;

  try {
    await prisma.incident.update({
      where: { id },
      data: {
        resolved: false,
      },
    });
    return NextResponse.json({ success: "Issue resolved successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error: "User not found or update failed",
        details: error,
      },
      { status: 500 }
    );
  }
}
