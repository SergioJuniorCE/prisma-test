import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const posts = await prisma.post.findMany()

if (posts.length === 0) {
  await prisma.post.create({
    data: {
      title: 'Hello World',
      // Body is WSIWYG editor content
      body: 'This is a post body',
      slug: 'hello-world',
      author: {
        create: {
          email: 'user@afabc.com',
          name: 'User',
          passwordHash: 'password',
        }
      }
    }
  })
}

await prisma.$disconnect()