var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var datos = fs.readFile('index.html', function(err, data){
	data.toString();
});

app.get('/', function(request, response) {
  response.send(datos);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
