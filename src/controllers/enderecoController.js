const { Endereco } = require("../models/enderecosModels");

exports.getAll = async (req, res) => {
  res.json(await Endereco.findAll());
};

exports.getById = async (req, res) => {
  const dado = await Endereco.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Endereço não encontrado" });
  res.json(dado);
};

exports.create = async (req, res) => {
  res.json(await Endereco.create(req.body));
};

exports.update = async (req, res) => {
  const dado = await Endereco.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Endereço não encontrado" });
  await dado.update(req.body);
  res.json(dado);
};

exports.remove = async (req, res) => {
  const dado = await Endereco.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Endereço não encontrado" });
  await dado.destroy();
  res.json({ msg: "Removido" });
};
