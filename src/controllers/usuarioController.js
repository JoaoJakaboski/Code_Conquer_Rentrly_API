const { Usuario, TipoUsuario } = require("../models/usuariosModels");

exports.getAll = async (req, res) => {
  const dados = await Usuario.findAll({ include: TipoUsuario });
  res.json(dados);
};

exports.getById = async (req, res) => {
  const dado = await Usuario.findByPk(req.params.id, { include: TipoUsuario });
  if (!dado) return res.status(404).json({ msg: "Usuário não encontrado" });
  res.json(dado);
};

exports.create = async (req, res) => {
  res.json(await Usuario.create(req.body));
};

exports.update = async (req, res) => {
  const dado = await Usuario.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Usuário não encontrado" });
  await dado.update(req.body);
  res.json(dado);
};

exports.remove = async (req, res) => {
  const dado = await Usuario.findByPk(req.params.id);
  if (!dado) return res.status(404).json({ msg: "Usuário não encontrado" });
  await dado.destroy();
  res.json({ msg: "Removido" });
};
