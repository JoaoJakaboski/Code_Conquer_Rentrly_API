const express = require('express');
const router = express.Router();
const enderecosController = require('../controllers/enderecosController');


router.get('/', enderecosController.buscarEnderecos);
router.post('/', enderecosController.adicionarEndereco);
router.put('/:id', enderecosController.atualizarEndereco);
router.delete('/:id', enderecosController.deletarEndereco);

module.exports = router;