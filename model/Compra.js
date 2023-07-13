const Usuario = require('./Usuario');
const Tenis = require('./Tenis');

module.exports = class Compra {
    constructor() {
        this.id = "";
        this.quantidade = 0;
        this.entrega = 0;
        this.valorCompra = 0.0;
        this.usu = new Usuario();
        this.ten = new Tenis();
    }

}