let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

let app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
  });

app.use('/', express.static(path.join(__dirname, 'dist')))
// app.use(serveStatic(__dirname + "/dist"));

let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);