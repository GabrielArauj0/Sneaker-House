const express = require('express');
const app = express();

app.use(express.static(__dirname + '/visual'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/visual/index.html');
});

app.get('/beneficios', function(req, res){
    res.sendFile(__dirname + '/visual/beneficios.html');
});

app.get('/vans', function(req, res){
    res.sendFile(__dirname + '/visual/vans.html');
});

