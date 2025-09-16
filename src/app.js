const express = require('express');
const cors = require('cors');
const { specs, swaggerUi } = require('./swagger'); // Importar o Swagger

const usuariosRoutes = require('./routes/usuariosRoutes');
const acessosRoutes = require('./routes/acessosRoutes');
const unidadesRoutes = require('./routes/unidadesRoutes');
const setoresRoutes = require('./routes/setoresRoutes');
const patrimoniosRoutes = require('./routes/patrimoniosRoutes');
const marcasRoutes = require('./routes/marcasRoutes');
const ordensDeServicoRoutes = require('./routes/ordensDeServicoRoutes');
const usuariosEAcessosRoutes = require('./routes/usuariosEAcessosRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health/', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

//Rotas da API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/acessos', acessosRoutes);
app.use('/api/unidades', unidadesRoutes);
app.use('/api/setores', setoresRoutes);
app.use('/api/patrimonios', patrimoniosRoutes);
app.use('/api/marcas', marcasRoutes);
app.use('/api/ordensdeservico', ordensDeServicoRoutes);
app.use('/api/usuariosEAcessos', usuariosEAcessosRoutes);

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Rota não encontrada',
        path: req.originalUrl,
        method: req.method 
    });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err.stack);
    res.status(500).json({ 
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Algo deu errado!'
    });
});

module.exports = app;