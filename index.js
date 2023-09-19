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
app.set('views','./visual');

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.post('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/tenis', function (req, res) {
  res.render('tenisPag.ejs')
})

app.get('/registrado', function (req, res) {
  res.render('../visual/registrado.ejs')
})

app.get('/registro', function (req, res) {
  res.render('../visual/registro.ejs');
});

app.get('/login', function (req, res) {
  res.render('../visual/login.ejs');
});

app.get('/listaClientes', function(req, res){
  var c = new Cliente();

  c.listar(conexao, function(result) {
    res.render('../visual/clientelista.ejs', {cliente: result});
  });
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

  res.render('../visual/registrado.ejs');
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


