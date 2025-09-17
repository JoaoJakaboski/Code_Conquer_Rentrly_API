const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.buscarUsuarios);
router.post('/', usuariosController.adicionarUsuario);
router.post('/login', usuariosController.efetuarLogin);

module.exports = router;