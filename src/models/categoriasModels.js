const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Categoria = sequelize.define("categorias", {
  idCategoria: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nomeCategoria: DataTypes.STRING
}, { timestamps: false });

module.exports = Categoria;
