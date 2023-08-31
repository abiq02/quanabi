let express       = require('express');
let app           = express();
let port       = process.env.PORT || 80;
let expressWs  = require('express-ws')(app);
app.use(express.static('public/'));
let wss = expressWs.getWss();

app.ws('/websocket', function (a){
  console.log("connec");
  a.on('message', message => {
    console.log(message);
  wss.clients.forEach(function client(ab){
    ab.send(message);})
  });

});
app.listen(port, function() {
    console.log("Server listen on port ", port);
});
console.log("a");
