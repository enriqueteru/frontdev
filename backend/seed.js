const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Eliminar todos los usuarios existentes
  await prisma.user.deleteMany();
  console.log("Existing users deleted");

  // Crear usuarios
  const user1 = await prisma.user.create({
    data: { name: "John Doe", email: "john.doe@example.com" },
  });

  const user2 = await prisma.user.create({
    data: { name: "Jane Smith", email: "jane.smith@example.com" },
  });

  console.log(`Users ${user1.name} and ${user2.name} created`);

  // Crear un proyecto con usuarios y etiquetas
  const project = await prisma.project.create({
    data: {
      name: "Amazing Project",
      coverUrl: "https://placehold.co/600x400",
      category: "Technology",
      users: {
        connect: [{ id: user1.id }, { id: user2.id }],
      },
      images: {
        create: [
          { url: "https://placehold.co/600x400", description: "First image" },
          { url: "https://placehold.co/600x400", description: "Second image" },
        ],
      },
      tags: {
        create: [{ name: "design" }, { name: "web" }, { name: "prisma" }],
      },
    },
  });

  const config = await prisma.config.create({
    data: {
      name: "Amazing Project",
      logo: "https://placehold.co/200x200",
      description: "Technology",
      color: "green",
      url: "https://enriqueteruel.com",
      social: {
        create: [
          {
            name: "twitter",
            url: "https://twitter.com/enriqueteruel",
            icon: "twitter",
          },
          {
            name: "linkedin",
            url: "https://linkedin.com/in/enriqueteruel",
            icon: "linkedin",
          },
        ],
      },
    },
  });
  console.log(`Config ${config.name} created`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
