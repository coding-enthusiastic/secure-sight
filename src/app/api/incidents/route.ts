import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const Prisma = new PrismaClient();
  const data = await Prisma.camera.findMany({
    include: { incidents: true },
  });

  return NextResponse.json(data);
}
