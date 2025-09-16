const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Imagem = sequelize.define("imagens", {
  idImagem: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  urlImagem: DataTypes.STRING,
  idProduto: DataTypes.INTEGER,
  ordemExibicao: DataTypes.STRING
}, { timestamps: false });

module.exports = Imagem;
