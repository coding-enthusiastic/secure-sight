import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Write Prisma Client queries here
  const camera = await prisma.camera.create({
    data: {
      name: "Camera A",
      location: "Shop Floor",
      incidents: {
        create: [
          {
            type: "Gun Threat",
            tsStart: new Date("2025-07-25T08:30:00Z"),
            tsEnd: new Date("2025-07-25T08:32:00Z"),
            thumbnailUrl: "https://example.com/thumbs/incident1.jpg",
            resolved: false,
          },
          {
            type: "Unauthorized Access",
            tsStart: new Date("2025-07-24T14:10:00Z"),
            tsEnd: new Date("2025-07-24T14:15:00Z"),
            thumbnailUrl: "https://example.com/thumbs/incident2.jpg",
            resolved: true,
          },
        ],
      },
    },
  });
  console.log(camera);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
