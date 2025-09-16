const pool = require('../config/db');

exports.buscarTodos = async () => {
    const result = await pool.query('SELECT * FROM vendaAluguel');
    return result.rows;
};

exports.buscarPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM vendaAluguel WHERE "idVendaAluguel" = $1',
        [id]
    );
    return result.rows[0];
};

exports.inserir = async (nomeVendaAluguel) => {
    const result = await pool.query(
        'INSERT INTO vendaAluguel ("nomeVendaAluguel") VALUES ($1) RETURNING *',
        [nomeVendaAluguel]
    );
    return result.rows[0];
};

exports.editar = async (id, nomeVendaAluguel) => {
    const result = await pool.query(
        'UPDATE vendaAluguel SET "nomeVendaAluguel" = $1 WHERE "idVendaAluguel" = $2 RETURNING *',
        [nomeVendaAluguel, id]
    );
    return result.rows[0];
};

exports.deletar = async (id) => {
    const result = await pool.query(
        'DELETE FROM vendaAluguel WHERE "idVendaAluguel" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
