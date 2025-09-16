const Usuario = require("./Usuario");
const TipoUsuario = require("./TipoUsuario");
const Categoria = require("./Categoria");
const Produto = require("./Produto");
const Imagem = require("./Imagem");
const Endereco = require("./Endereco");
const VendaAluguel = require("./VendaAluguel");

// Associações

// TipoUsuario 1:N Usuario
TipoUsuario.hasMany(Usuario, { foreignKey: "idTipoUsuario" });
Usuario.belongsTo(TipoUsuario, { foreignKey: "idTipoUsuario" });

// Usuario 1:N Produto
Usuario.hasMany(Produto, { foreignKey: "idUsuario" });
Produto.belongsTo(Usuario, { foreignKey: "idUsuario" });

// Categoria 1:N Produto
Categoria.hasMany(Produto, { foreignKey: "idCategoria" });
Produto.belongsTo(Categoria, { foreignKey: "idCategoria" });

// Produto 1:N Imagem
Produto.hasMany(Imagem, { foreignKey: "idProduto" });
Imagem.belongsTo(Produto, { foreignKey: "idProduto" });

// Endereco 1:N Produto
Endereco.hasMany(Produto, { foreignKey: "idEndereco" });
Produto.belongsTo(Endereco, { foreignKey: "idEndereco" });

// VendaAluguel 1:N Produto
VendaAluguel.hasMany(Produto, { foreignKey: "idVendaAluguel" });
Produto.belongsTo(VendaAluguel, { foreignKey: "idVendaAluguel" });

module.exports = {
  Usuario, TipoUsuario, Categoria, Produto, Imagem, Endereco, VendaAluguel
};
