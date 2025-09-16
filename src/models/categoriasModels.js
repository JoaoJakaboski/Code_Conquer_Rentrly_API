const pool = require('../config/db');

exports.buscarTodasCategorias = async () => {
    const result = await pool.query('SELECT * FROM categorias');
    return result.rows;
};

exports.buscarCategoriaPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM categorias WHERE "idCategoria" = $1',
        [id]
    );
    return result.rows[0];
};

exports.inserirCategoria = async (nomeCategoria) => {
    const result = await pool.query(
        'INSERT INTO categorias ("nomeCategoria") VALUES ($1) RETURNING *',
        [nomeCategoria]
    );
    return result.rows[0];
};

exports.editarCategoria = async (id, nomeCategoria) => {
    const result = await pool.query(
        'UPDATE categorias SET "nomeCategoria" = $1 WHERE "idCategoria" = $2 RETURNING *',
        [nomeCategoria, id]
    );
    return result.rows[0];
};

exports.deletarCategoria = async (id) => {
    const result = await pool.query(
        'DELETE FROM categorias WHERE "idCategoria" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
