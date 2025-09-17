const usuariosModels = require('../models/usuariosModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRESIN = process.env.EXPIRESIN;

exports.buscarUsuarios = async (req, res) => {
    try {
        const result = await usuariosModels.buscarUsuarios();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

exports.efetuarLogin = async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    try {
        const usuarios = await usuariosModels.buscarUsuarios();
        const usuario = usuarios.find(u => u.emailUsuario === email);
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const senhaValida = await bcrypt.compare(senha, usuario.senhaUsuario);
        if (!senhaValida) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ id: usuario.idUsuario, email: usuario.emailUsuario }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao efetuar login' });
    }
};

exports.adicionarUsuario = async (req, res) => {
    const { email, senha, telefone, cpfCNPJ, fotoPerfil, idTipoUsuario, idEndereco } = req.body;
    if (!email || !senha || !telefone || !cpfCNPJ || !idTipoUsuario || !idEndereco) {
        return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    }
    try {
        const usuarios = await usuariosModels.buscarUsuarios();
        const usuarioExistente = usuarios.find(u => u.emailUsuario === email || u.cpfCNPJ === cpfCNPJ);
        if (usuarioExistente) {
            return res.status(409).json({ error: 'Usuário com esse email ou CPF/CNPJ já existe' });
        }
        const senhaHash = await bcrypt.hash(senha, 10);
        const novoUsuario = await usuariosModels.adicionarUsuario(email, senhaHash, telefone, cpfCNPJ, fotoPerfil, idTipoUsuario, idEndereco);
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
};