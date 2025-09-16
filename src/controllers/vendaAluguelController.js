const { VendaAluguel } = require("../models");

exports.getAll = async (req, res) => {
  res.json(await VendaAluguel.findAll());
};

exports.getById = async (req, res) => {
  const item = await VendaAluguel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Venda/Aluguel não encontrado" });
  res.json(item);
};

exports.create = async (req, res) => {
  res.json(await VendaAluguel.create(req.body));
};

exports.update = async (req, res) => {
  const item = await VendaAluguel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Venda/Aluguel não encontrado" });
  await item.update(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  const item = await VendaAluguel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ msg: "Venda/Aluguel não encontrado" });
  await item.destroy();
  res.json({ msg: "Removido" });
};
