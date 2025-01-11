const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning database...');

  // Eliminar datos de todas las tablas en el orden correcto para respetar las relaciones
  await prisma.link.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.social.deleteMany();
  await prisma.config.deleteMany();
  await prisma.image.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  console.log('Database cleaned.');

  console.log('Seeding database...');

  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: false,
    },
  });

  // Crear proyectos
  const project1 = await prisma.project.create({
    data: {
      name: 'Project Alpha',
      coverUrl: 'https://placehold.co/600x400?text=Project+Alpha',
      category: 'Technology',
      status: true,
      users: {
        connect: [{ id: user1.id }],
      },
      images: {
        create: [
          { url: 'https://placehold.co/300x200?text=Image+1', description: 'Image 1' },
          { url: 'https://placehold.co/300x200?text=Image+2', description: 'Image 2' },
        ],
      },
      tags: {
        create: [
          { name: 'Innovation' },
          { name: 'AI' },
        ],
      },
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: 'Project Beta',
      coverUrl: 'https://placehold.co/600x400?text=Project+Beta',
      category: 'Finance',
      status: true,
      users: {
        connect: [{ id: user2.id }],
      },
      images: {
        create: [{ url: 'https://placehold.co/300x200?text=Image+3', description: 'Image 3' }],
      },
      tags: {
        create: [{ name: 'FinTech' }],
      },
    },
  });

  // Crear configuración
  const config = await prisma.config.create({
    data: {
      name: 'Main Config',
      description: 'Configuration for the main application',
      color: '#0000FF',
      url: 'https://example.com',
      logo: 'https://placehold.co/100x100?text=Logo',
      social: {
        create: [
          { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook-icon' },
          { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter-icon' },
        ],
      },
      menus: {
        create: [
          {
            name: 'Main Menu',
            links: {
              create: [
                { name: 'Home', url: '/', order: 1 },
                { name: 'About', url: '/about', order: 2 },
              ],
            },
          },
          {
            name: 'Footer Menu',
            links: {
              create: [
                { name: 'Privacy Policy', url: '/privacy', order: 1 },
                { name: 'Terms of Service', url: '/terms', order: 2 },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
