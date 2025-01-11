const { PrismaClient } = require("@prisma/client");
const { handleErrors } = require("../utils/handleErrors");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: { status: true }, 
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    res.send({ users });
  } catch (e) {
    handleErrors(res, `ERROR_GET_USERS: ${e}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      res.status(404).send({ error: "User not found" });
      return;
    }
    res.send({ user });
  } catch (e) {
    handleErrors(res, `ERROR_GET_USER: ${e}`);
  }
};

const createUser = async (req, res) => {
  console.log("BODY", req.body);
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.send({
      msg: "User created",
      newUser,
    });
  } catch (e) {
    handleErrors(res, `ERROR_CREATE_USER: ${e}`);
  }
};

const desactivateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { status: false }, 
    });
    res.send({
      msg: `User ${id} deactivated successfully`,
      updatedUser,
    });
  } catch (e) {
    handleErrors(res, `ERROR_DESACTIVATE_USER: ${e}`);
  }
};

const activateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { status: true }, 
    });
    res.send({
      msg: `User ${id} activated successfully`,
      updatedUser,
    });
  } catch (e) {
    handleErrors(res, `ERROR_ACTIVATE_USER: ${e}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.send({
      msg: `User ${id} updated successfully`,
      updatedUser,
    });
  } catch (e) {
    handleErrors(res, `ERROR_UPDATE_USER: ${e}`);
  }
};

const getUsersTrash = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: { status: false }, 
    });
    res.send({ users });
  } catch (e) {
    handleErrors(res, `ERROR_GET_USERS_TRASH: ${e}`);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  desactivateUser,
  activateUser,
  updateUser,
  getUsersTrash,
};
