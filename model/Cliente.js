module.exports = class Cliente {
    constructor() {
        this.nome = "";
        this.cpf = "";
        this.endereco = "";
        this.email = "";
        this.senha = "";
        this.celular = "";
    }

    inserir(conexao) {
        var sql = "insert into Cliente (nome, cpf, endereco, email, senha, celular) values (?, ?, ?, ?, ?, ?)";
        conexao.query(sql,
            [this.nome, this.cpf, this.endereco, this.email, this.senha, this.celular],
            function (err, result) {
                if (err) throw err;
            }
        );
    }

    listar(conexao, callback) {
        var sql = "select * from Cliente";

        conexao.query(sql,
            function (err, result){
                if (err) throw err;
                return callback(result);
            }
            );
    }
}