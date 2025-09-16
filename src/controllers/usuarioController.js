const { Usuario, TipoUsuario } = require("../models");

exports.getAll = async (req, res) => {
  const usuarios = await Usuario.findAll({ include: TipoUsuario });
  res.json(usuarios);
};

exports.getById = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id, { include: TipoUsuario });
  if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });
  res.json(usuario);
};

exports.create = async (req, res) => {
  const novo = await Usuario.create(req.body);
  res.json(novo);
};

exports.update = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });
  await usuario.update(req.body);
  res.json(usuario);
};

exports.remove = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });
  await usuario.destroy();
  res.json({ msg: "Usuário removido" });
};
