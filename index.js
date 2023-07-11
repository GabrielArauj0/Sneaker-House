const express = require('express');
const app = express();

app.set('views', __dirname + '/public/visual')

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/visual/index.html');
});

app.get('/beneficios', function(req, res){
    res.sendFile(__dirname + '/public/visual/beneficios.html');
});

app.get('/vans', function(req, res){
  res.render('vans.ejs');
});

