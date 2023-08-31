let express       = require('express');
let app           = express();
let port       = process.env.PORT || 80;
let expressWs  = require('express-ws')(app);
app.use(express.static('public/'));
const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});
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
