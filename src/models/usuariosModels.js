const pool = require('../config/db');

exports.buscarPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM usuarios WHERE "idUsuario" = $1',
        [id]
    );
    return result.rows[0];
};

exports.buscarPorEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM usuarios WHERE "emailUsuario" = $1',
        [email]
    );
    return result.rows[0];
};

exports.buscarTodosUsuarios = async () => {
    const result = await pool.query(
        'SELECT u."idUsuario", u."nomeUsuario", u."emailUsuario", t."nomeTipoUsuario" ' +
        'FROM usuarios u ' +
        'INNER JOIN tiposUsuario t ON u."idTipoUsuario" = t."idTipoUsuario"'
    );
    return result.rows;
};

exports.inserirUsuario = async (nome, email, telefone, cpf_cnpj, idTipoUsuario, fotoPerfil) => {
    const result = await pool.query(
        'INSERT INTO usuarios ("nomeUsuario", "emailUsuario", "telefoneUsuario", "cpf_cnpj", "idTipoUsuario", "fotoPerfil") ' +
        'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nome, email, telefone, cpf_cnpj, idTipoUsuario, fotoPerfil]
    );
    return result.rows[0];
};

exports.editarUsuario = async (id, nome, email, telefone, idTipoUsuario) => {
    const result = await pool.query(
        'UPDATE usuarios SET "nomeUsuario" = $1, "emailUsuario" = $2, "telefoneUsuario" = $3, "idTipoUsuario" = $4 ' +
        'WHERE "idUsuario" = $5 RETURNING *',
        [nome, email, telefone, idTipoUsuario, id]
    );
    return result.rows[0];
};

exports.deletarUsuario = async (id) => {
    const result = await pool.query(
        'DELETE FROM usuarios WHERE "idUsuario" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
