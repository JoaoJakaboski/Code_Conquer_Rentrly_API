const { Categoria } = require("../models/categoriasModels");

exports.getAll = async (req, res) => {
  res.json(await Categoria.findAll());
};

exports.getById = async (req, res) => {
  const dado = await Categoria.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Categoria não encontrada" });
  res.json(dado);
};

exports.create = async (req, res) => {
  res.json(await Categoria.create(req.body));
};

exports.update = async (req, res) => {
  const dado = await Categoria.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Categoria não encontrada" });
  await dado.update(req.body);
  res.json(dado);
};

exports.remove = async (req, res) => {
  const dado = await Categoria.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Categoria não encontrada" });
  await dado.destroy();
  res.json({ msg: "Removido" });
};
