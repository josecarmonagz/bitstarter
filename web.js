var express = require('express');
var app = express();
app.use(express.logger());


/*app.get('/', function(request, response) {
  response.send('Hello World 2!');
});*/

var datos = fs.readFileSync('index.html','utf8');

app.get('/', function(request, response) {
  response.send(datos);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

