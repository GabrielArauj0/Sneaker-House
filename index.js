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
  res.render('index.html');
});

app.post('/', function (req, res) {
  res.render('index.html');
});

app.get('/tenis', function (req, res) {
  res.render('tenisPag.ejs')
})

app.get('/registro', function (req, res) {
  res.sendFile(__dirname + '/visual/registro.html');
});

app.get('/beneficios', function (req, res) {
  res.sendFile(__dirname + '/visual/beneficios.html');
});

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/visual/login.html');
});

app.post('/processarCadastro', function (req, res) {
  var c = new Cliente();

  c.nome = req.body.nome;
  c.cpf = req.body.cpf;
  c.endereco = req.body.endereco;
  c.email = req.body.email;
  c.senha = req.body.senha;
  c.celular = req.body.celular;

  c.inserir(conexao);

  res.sendFile(__dirname + '/visual/login.html');
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

const Cliente = require('./model/Cliente');


