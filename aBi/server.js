let express       = require('express');
let app           = express();
let port       = process.env.PORT || 80;
let expressWs  = require('express-ws')(app);
app.use(express.static('public/'));
app.listen(port, function() {
    console.log("Server listen on port ", port);
});
console.log("connect");
