const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define("usuarios", {
  idUsuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  emailUsuario: DataTypes.STRING,
  nomeUsuario: DataTypes.STRING,
  telefoneUsuario: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  idTipoUsuario: DataTypes.INTEGER,
  urlPerfil: DataTypes.STRING
}, { timestamps: false });

module.exports = Usuario;
