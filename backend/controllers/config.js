const { PrismaClient } = require("@prisma/client");
const { handleErrors } = require("../utils/handleErrors");

const prisma = new PrismaClient();


const getConfigs = async (req, res) => {
  try {
    const configs = await prisma.config.findMany();
    res.send({ configs });
  } catch (e) {
    handleErrors(res, `ERROR_GET_CONFIGS: ${e}`);
  }
};


const getConfigById = async (req, res) => {
  try {
    const { id } = req.params;
    const config = await prisma.config.findUnique({
      where: { id: parseInt(id) },
    });
    if (!config) {
      res.status(404).send({ error: "Configuration not found" });
      return;
    }
    res.send({ config });
  } catch (e) {
    handleErrors(res, `ERROR_GET_CONFIG: ${e}`);
  }
};


const createConfig = async (req, res) => {
  try {
    const { name, description, color, url, logo } = req.body;
    const newConfig = await prisma.config.create({
      data: { name, description, color, url, logo },
    });
    res.status(201).send({
      msg: "Configuration created",
      newConfig,
    });
  } catch (e) {
    handleErrors(res, `ERROR_CREATE_CONFIG: ${e}`);
  }
};


const updateConfig = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, color, url, logo } = req.body;
    const updatedConfig = await prisma.config.update({
      where: { id: parseInt(id) },
      data: { name, description, color, url, logo },
    });
    res.send({
      msg: "Configuration updated successfully",
      updatedConfig,
    });
  } catch (e) {
    handleErrors(res, `ERROR_UPDATE_CONFIG: ${e}`);
  }
};


const deleteConfig = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.config.delete({
      where: { id: parseInt(id) },
    });
    res.send({
      msg: "Configuration deleted successfully",
    });
  } catch (e) {
    handleErrors(res, `ERROR_DELETE_CONFIG: ${e}`);
  }
};

module.exports = {
  getConfigs,
  getConfigById,
  createConfig,
  updateConfig,
  deleteConfig,
};
