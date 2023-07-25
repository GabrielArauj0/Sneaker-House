//* NODE PACKS INICIALIZAÇÃO *//

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/visual'));

app.listen(3000, function () {
  console.log("Servidor no ar - Porta: 3000!")
});

//* LINK DAS PAGINAS *//

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/beneficios', function (req, res) {
  res.sendFile(__dirname + '/visual/beneficios.html');
});

app.set('views','./visual');

app.get('/vans', function (req, res) {
  res.render('vans.ejs');
});

//* DATA BASE *//

var mysql = require('mysql');
var conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sneakerhouse"
});
conexao.connect(function (err) {
  if (err) throw err;
  console.log("Banco de Dados Conectado");
});

//* MODELOS *//

const Usuario = require('./model/Usuario');
const Tenis = require('./model/Tenis');
const Compra = require('./model/Compra');

//* ATIVAR FORMULARIO USUARIO *//

app.get('/cadastro', function (req, res) {
  res.sendFile(__dirname + '/visual/cadastro.html');
});

app.post('/processarCadastro', function (req, res) {
  var usu = new Usuario();

  usu.matricula = req.body.cpf;
  usu.nome = req.body.nome;
  usu.celular = req.body.celular;
  usu.endereco = req.body.endereco;
  usu.email = req.body.email;

  usu.inserir(conexao);
});

//* ATIVAR FORMULARIO TENIS *//

app.get('/cadastroTenis', function (req, res) {
  res.sendFile(__dirname + '/visual/cadastroTenis.html');
});

app.post('/processarTenis', function (req, res) {
  var ten = new Tenis();

  ten.id = req.body.id;
  ten.nome = req.body.nome;
  ten.descricao = req.body.descricao;
  ten.preco_unitario = req.body.preco_unitario;
  ten.unidade = req.body.unidade;

  ten.inserir(conexao);
});