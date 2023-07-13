module.exports = class Usuario {
    constructor() {
        this.cpf = "";
        this.nome = "";
        this.celular = "";
        this.endereco = "";
        this.email = "";
    }

    inserir(conexao) {
        var sql = "insert into usuario (cpf, nome, celular, endereco, email) values (?, ?, ?, ?, ?)";
        conexao.query(sql,
            [this.cpf, this.nome, this.celular, this.endereco, this.email],
            function (err, result) {
                if (err) throw err;
            }
        );
    }
}