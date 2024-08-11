import { Elysia } from "elysia";
import { prisma } from "./prisma";

const app = new Elysia()
  .get("/", () => {
    return "Hello, Elysia!";
  })
  .get("/posts", async () => {
    const posts = await prisma.post.findMany();
    return posts
  })
  .listen(1234);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
