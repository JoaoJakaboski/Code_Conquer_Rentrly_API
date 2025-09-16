const { Produto, Usuario, Categoria, Imagem, Endereco, VendaAluguel } = require("../models/produtosModels");

exports.getAll = async (req, res) => {
  const dados = await Produto.findAll({
    include: [Usuario, Categoria, Imagem, Endereco, VendaAluguel]
  });
  res.json(dados);
};

exports.getById = async (req, res) => {
  const dado = await Produto.findByPk(req.params.id, {
    include: [Usuario, Categoria, Imagem, Endereco, VendaAluguel]
  });
  if (!dado) return res.status(404).json({ msg: "Produto não encontrado" });
  res.json(dado);
};

exports.create = async (req, res) => {
  res.json(await Produto.create(req.body));
};

exports.update = async (req, res) => {
  const dado = await Produto.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Produto não encontrado" });
  await dado.update(req.body);
  res.json(dado);
};

exports.remove = async (req, res) => {
  const dado = await Produto.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Produto não encontrado" });
  await dado.destroy();
  res.json({ msg: "Removido" });
};
