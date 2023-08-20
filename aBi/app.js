let init = function (ws){
  ws.sendAll = function (data){
    this.clents.forEach(function(wss){
      wss.red('hello:');
  };
);
}
}
module.exports = init;
