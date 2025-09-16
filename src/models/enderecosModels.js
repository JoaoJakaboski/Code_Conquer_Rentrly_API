const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Endereco = sequelize.define("enderecos", {
  idEndereco: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cepEndereco: DataTypes.STRING,
  ruaEndereco: DataTypes.STRING,
  numeroEndereco: DataTypes.STRING,
  bairroEndereco: DataTypes.STRING,
  cidadeEndereco: DataTypes.STRING,
  ufEndereco: DataTypes.STRING
}, { timestamps: false });

module.exports = Endereco;
