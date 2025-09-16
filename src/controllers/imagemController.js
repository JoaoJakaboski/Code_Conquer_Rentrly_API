const { Imagem } = require("../models/imagensModels");

exports.getAll = async (req, res) => {
  res.json(await Imagem.findAll());
};

exports.getById = async (req, res) => {
  const dado = await Imagem.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Imagem não encontrada" });
  res.json(dado);
};

exports.create = async (req, res) => {
  res.json(await Imagem.create(req.body));
};

exports.update = async (req, res) => {
  const dado = await Imagem.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Imagem não encontrada" });
  await dado.update(req.body);
  res.json(dado);
};

exports.remove = async (req, res) => {
  const dado = await Imagem.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Imagem não encontrada" });
  await dado.destroy();
  res.json({ msg: "Removido" });
};
