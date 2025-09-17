const ProdutoModel = require("../models/produtosModels");

// Buscar todos os produtos
exports.getProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoModel.buscarProdutos();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar produto por ID
exports.getProdutoById = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await ProdutoModel.buscarProdutoPorId(id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar produto
exports.createProduto = async (req, res) => {
  try {
    const { idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco } = req.body;
    const produto = await ProdutoModel.adicionarProduto(
      idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco
    );
    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar produto
exports.updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco } = req.body;
    const produto = await ProdutoModel.atualizarProduto(
      id, idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco
    );
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar produto
exports.deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await ProdutoModel.deletarProduto(id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
    res.json({ message: "Produto removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
