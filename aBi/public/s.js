const click = document.querySelector("#click");
const mes = document.querySelector("#mes");
const ms = document.querySelector("#mge");
click.onclick = function(){
  a = ms.value;
  ws.send(a);
}
var ws = new WebSocket("wss://bzzhh.onrender.com/");
    ws.onopen = function (a){
      console.log("hello");
    };
    
    ws.onmessage = function(message){
      console.log(message.data);
      mes.textContent += `\n\n${message.data}`;
      mes.scrollTop = mes.scrollHeight;
    };
