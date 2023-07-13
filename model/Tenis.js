module.exports = class Tenis {
    constructor() {
        this.id = "";
        this.nome = "";
        this.descricao = "";
        this.preco_unitario = 0.0;
        this.unidade = "";
        this.tamanho = "";
    }

    inserir(conexao) {
        var sql = "insert into tenis (id, nome, descricao, preco_unitario, unidade, tamanho) values (?, ?, ?, ?, ?, ?)";
        conexao.query(sql,
            [this.id, this.nome, this.descricao, this.preco, this.unidade, this.tamanho],
            function (err, result) {
                if (err) throw err;
            }
        );

    }
}