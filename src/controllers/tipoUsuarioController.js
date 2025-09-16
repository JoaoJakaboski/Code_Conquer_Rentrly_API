const { TipoUsuario } = require("../models");

exports.getAll = async (req, res) => {
  res.json(await TipoUsuario.findAll());
};

exports.getById = async (req, res) => {
  const item = await TipoUsuario.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Tipo de usuário não encontrado" });
  res.json(item);
};

exports.create = async (req, res) => {
  res.json(await TipoUsuario.create(req.body));
};

exports.update = async (req, res) => {
  const item = await TipoUsuario.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Tipo de usuário não encontrado" });
  await item.update(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  const item = await TipoUsuario.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Tipo de usuário não encontrado" });
  await item.destroy();
  res.json({ msg: "Removido" });
};
