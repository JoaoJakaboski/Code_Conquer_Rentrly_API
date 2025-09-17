const pool = require('../config/db');

// Buscar todos os produtos
exports.buscarProdutos = async () => {
    const result = await pool.query(
        `SELECT p.*, 
                u.nomeusuario, 
                c.nomecategoria, 
                v.tipopublicacao, 
                e.ruaendereco
         FROM produtos p
         JOIN usuarios u ON p.idusuario = u.idusuario
         JOIN categorias c ON p.idcategoria = c.idcategoria
         JOIN vendaaluguel v ON p.idvendaaluguel = v.idvendaaluguel
         JOIN enderecos e ON p.idendereco = e.idendereco
         ORDER BY p.idproduto ASC`
    );
    return result.rows;
};

// Buscar produto por ID
exports.buscarProdutoPorId = async (id) => {
    const result = await pool.query(
        `SELECT p.*, 
                u.nomeusuario, 
                c.nomecategoria, 
                v.tipopublicacao, 
                e.ruaendereco
         FROM produtos p
         JOIN usuarios u ON p.idusuario = u.idusuario
         JOIN categorias c ON p.idcategoria = c.idcategoria
         JOIN vendaaluguel v ON p.idvendaaluguel = v.idvendaaluguel
         JOIN enderecos e ON p.idendereco = e.idendereco
         WHERE p.idproduto = $1`,
        [id]
    );
    return result.rows[0];
};

// Adicionar produto
exports.adicionarProduto = async (idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco) => {
    const result = await pool.query(
        `INSERT INTO produtos ("idUsuario", "idCategoria", "nomeProduto", "precoProduto", "idVendaAluguel", "idEndereco") 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco]
    );
    return result.rows[0];
};

// Atualizar produto
exports.atualizarProduto = async (id, idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco) => {
    const result = await pool.query(
        `UPDATE produtos 
         SET "idUsuario" = $1, 
             "idCategoria" = $2, 
             "nomeProduto" = $3, 
             "precoProduto" = $4, 
             "idVendaAluguel" = $5, 
             "idEndereco" = $6
         WHERE "idProduto" = $7 RETURNING *`,
        [idUsuario, idCategoria, nomeProduto, precoProduto, idVendaAluguel, idEndereco, id]
    );
    return result.rows[0];
};

// Deletar produto
exports.deletarProduto = async (id) => {
    const result = await pool.query(
        'DELETE FROM produtos WHERE "idProduto" = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
