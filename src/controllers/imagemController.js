const { Imagem } = require("../models");

exports.getAll = async (req, res) => {
  res.json(await Imagem.findAll());
};

exports.getById = async (req, res) => {
  const item = await Imagem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Imagem não encontrada" });
  res.json(item);
};

exports.create = async (req, res) => {
  res.json(await Imagem.create(req.body));
};

exports.update = async (req, res) => {
  const item = await Imagem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Imagem não encontrada" });
  await item.update(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  const item = await Imagem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Imagem não encontrada" });
  await item.destroy();
  res.json({ msg: "Removida" });
};
