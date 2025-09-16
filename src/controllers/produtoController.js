const { Produto, Usuario, Categoria, Imagem, Endereco, VendaAluguel } = require("../models");

exports.getAll = async (req, res) => {
  const produtos = await Produto.findAll({
    include: [Usuario, Categoria, Imagem, Endereco, VendaAluguel]
  });
  res.json(produtos);
};

exports.getById = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id, {
    include: [Usuario, Categoria, Imagem, Endereco, VendaAluguel]
  });
  if (!produto) return res.status(404).json({ msg: "Produto não encontrado" });
  res.json(produto);
};

exports.create = async (req, res) => {
  res.json(await Produto.create(req.body));
};

exports.update = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (!produto) return res.status(404).json({ msg: "Produto não encontrado" });
  await produto.update(req.body);
  res.json(produto);
};

exports.remove = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (!produto) return res.status(404).json({ msg: "Produto não encontrado" });
  await produto.destroy();
  res.json({ msg: "Produto removido" });
};
