const pool = require('../config/db');

exports.buscarTodosProdutos = async () => {
    const result = await pool.query(
        'SELECT p."idProduto", p."nomeProduto", p."precoProduto", ' +
        'c."nomeCategoria", u."nomeUsuario", v."nomeVendaAluguel", e."cidadeEndereco" ' +
        'FROM produtos p ' +
        'INNER JOIN categorias c ON p."idCategoria" = c."idCategoria" ' +
        'INNER JOIN usuarios u ON p."idUsuario" = u."idUsuario" ' +
        'INNER JOIN vendaAluguel v ON p."idVendaAluguel" = v."idVendaAluguel" ' +
        'INNER JOIN enderecos e ON p."idEndereco" = e."idEndereco"'
    );
    return result.rows;
};

exports.buscarProdutoPorId = async (id) => {
    const result = await pool.query(
        'SELECT * FROM produtos WHERE "idProduto" = $1',
        [id]
    );
    return result.rows[0];
};

exports.inserirProduto = async (idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco) => {
    const result = await pool.query(
        'INSERT INTO produtos ("idUsuario", "idCategoria", "nomeProduto", "precoProduto", "idVendaAluguel", "idEndereco") ' +
        'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco]
    );
    return result.rows[0];
};

exports.editarProduto = async (id, nomeProduto, precoProduto, idCategoria, idVendaAluguel) => {
    const result = await pool.query(
        'UPDATE produtos SET "nomeProduto" = $1, "precoProduto" = $2, "idCategoria" = $3, "idVendaAluguel" = $4 ' +
        'WHERE "idProduto" = $5 RETURNING *',
        [nomeProduto, precoProduto, idCategoria, idVendaAluguel, id]
    );
    return result.rows[0];
};

exports.deletarProduto = async (id) => {
    const result = await pool.query(
        'DELETE FROM produtos WHERE "idProduto" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
