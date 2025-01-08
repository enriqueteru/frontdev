const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/api/config", async (req, res) => {
  const config = await prisma.config.findFirst();
  res.json(config);
});

app.get("/api/project", async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
