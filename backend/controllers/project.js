const { PrismaClient } = require("@prisma/client");
const { handleErrors } = require("../utils/handleErrors");

const prisma = new PrismaClient();

const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { status: true },
      include: {
        users: true,
        images: true,
        tags: true,
      },
    });
    res.send({ projects });
  } catch (error) {
    handleErrors(res, `ERROR_GET_PROJECTS: ${error}`);
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
      include: {
        users: true,
        images: true,
        tags: true,
      },
    });
    if (!project || !project.status) {
      res.status(404).send({ error: "Project not found or inactive" });
      return;
    }
    res.send({ project });
  } catch (error) {
    handleErrors(res, `ERROR_GET_PROJECT_BY_ID: ${error}`);
  }
};

const createProject = async (req, res) => {
  try {
    const { name, coverUrl, category, users, images, tags } = req.body;

    const newProject = await prisma.project.create({
      data: {
        name,
        coverUrl,
        category,
        status: true,
        users: {
          connect: users?.map((userId) => ({ id: userId })),
        },
        images: {
          create: images,
        },
        tags: {
          create: tags,
        },
      },
    });

    res.status(201).send({
      msg: "Project created successfully",
      newProject,
    });
  } catch (error) {
    handleErrors(res, `ERROR_CREATE_PROJECT: ${error}`);
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, coverUrl, category, users, images, tags } = req.body;

    const updatedProject = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        name,
        coverUrl,
        category,
        users: {
          set: users?.map((userId) => ({ id: userId })),
        },
        images: {
          deleteMany: {},
          create: images,
        },
        tags: {
          deleteMany: {},
          create: tags,
        },
      },
    });

    res.send({
      msg: "Project updated successfully",
      updatedProject,
    });
  } catch (error) {
    handleErrors(res, `ERROR_UPDATE_PROJECT: ${error}`);
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await prisma.project.update({
      where: { id: parseInt(id) },
      data: { status: false },
    });

    res.send({
      msg: "Project logically deleted successfully",
      deletedProject,
    });
  } catch (error) {
    handleErrors(res, `ERROR_DELETE_PROJECT: ${error}`);
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
