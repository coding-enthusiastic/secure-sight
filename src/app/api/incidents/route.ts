import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const Prisma = new PrismaClient();

export async function GET() {
  const data = await Prisma.camera.findMany({
    include: { incidents: true },
  });

  return NextResponse.json(data);
}
