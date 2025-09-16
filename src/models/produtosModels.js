const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Produto = sequelize.define("produtos", {
  idProduto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  idUsuario: DataTypes.INTEGER,
  idCategoria: DataTypes.INTEGER,
  nomeProduto: DataTypes.STRING,
  precoProduto: DataTypes.STRING,
  idVendaAluguel: DataTypes.INTEGER,
  idEndereco: DataTypes.INTEGER
}, { timestamps: false });

module.exports = Produto;
