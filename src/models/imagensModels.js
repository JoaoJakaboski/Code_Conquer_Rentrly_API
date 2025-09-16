const pool = require('../config/db');

exports.buscarImagensPorProduto = async (idProduto) => {
    const result = await pool.query(
        'SELECT * FROM imagens WHERE "idProduto" = $1 ORDER BY "ordemExibicao"',
        [idProduto]
    );
    return result.rows;
};

exports.inserirImagem = async (idProduto, urlImagem, ordemExibicao) => {
    const result = await pool.query(
        'INSERT INTO imagens ("idProduto", "urlImagem", "ordemExibicao") VALUES ($1, $2, $3) RETURNING *',
        [idProduto, urlImagem, ordemExibicao]
    );
    return result.rows[0];
};

exports.deletarImagem = async (id) => {
    const result = await pool.query(
        'DELETE FROM imagens WHERE "idImagem" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
