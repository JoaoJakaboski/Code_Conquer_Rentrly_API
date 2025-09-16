const { Categoria } = require("../models");

exports.getAll = async (req, res) => {
  res.json(await Categoria.findAll());
};

exports.getById = async (req, res) => {
  const item = await Categoria.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Categoria não encontrada" });
  res.json(item);
};

exports.create = async (req, res) => {
  res.json(await Categoria.create(req.body));
};

exports.update = async (req, res) => {
  const item = await Categoria.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Categoria não encontrada" });
  await item.update(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  const item = await Categoria.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Categoria não encontrada" });
  await item.destroy();
  res.json({ msg: "Removida" });
};
