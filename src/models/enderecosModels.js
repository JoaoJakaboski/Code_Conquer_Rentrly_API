const pool = require('../config/db');

exports.buscarTodosEnderecos = async () => {
    const result = await pool.query('SELECT * FROM enderecos');
    return result.rows;
};

exports.buscarEnderecoPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM enderecos WHERE "idEndereco" = $1',
        [id]
    );
    return result.rows[0];
};

exports.inserirEndereco = async (cep, rua, numero, bairro, cidade, uf) => {
    const result = await pool.query(
        'INSERT INTO enderecos ("cepEndereco", "ruaEndereco", "numeroEndereco", "bairroEndereco", "cidadeEndereco", "ufEndereco") ' +
        'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [cep, rua, numero, bairro, cidade, uf]
    );
    return result.rows[0];
};

exports.editarEndereco = async (id, cep, rua, numero, bairro, cidade, uf) => {
    const result = await pool.query(
        'UPDATE enderecos SET "cepEndereco" = $1, "ruaEndereco" = $2, "numeroEndereco" = $3, "bairroEndereco" = $4, "cidadeEndereco" = $5, "ufEndereco" = $6 ' +
        'WHERE "idEndereco" = $7 RETURNING *',
        [cep, rua, numero, bairro, cidade, uf, id]
    );
    return result.rows[0];
};

exports.deletarEndereco = async (id) => {
    const result = await pool.query(
        'DELETE FROM enderecos WHERE "idEndereco" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
