const pool = require('../config/db');

exports.buscarTodos = async () => {
    const result = await pool.query('SELECT * FROM tiposUsuario');
    return result.rows;
};

exports.buscarPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM tiposUsuario WHERE "idTipoUsuario" = $1',
        [id]
    );
    return result.rows[0];
};

exports.inserir = async (nomeTipoUsuario) => {
    const result = await pool.query(
        'INSERT INTO tiposUsuario ("nomeTipoUsuario") VALUES ($1) RETURNING *',
        [nomeTipoUsuario]
    );
    return result.rows[0];
};

exports.editar = async (id, nomeTipoUsuario) => {
    const result = await pool.query(
        'UPDATE tiposUsuario SET "nomeTipoUsuario" = $1 WHERE "idTipoUsuario" = $2 RETURNING *',
        [nomeTipoUsuario, id]
    );
    return result.rows[0];
};

exports.deletar = async (id) => {
    const result = await pool.query(
        'DELETE FROM tiposUsuario WHERE "idTipoUsuario" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
