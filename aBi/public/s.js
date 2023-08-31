const label = document.querySelector("#mge");
const mes = document.querySelector("#mes");
const ms = document.querySelector("#inn");

const ws = new WebSocket("wss://bzzhh.onrender.com/websocket");
ws.onopen = function (a){
    console.log("hello");
    };
    
ws.onmessage = function(message){
    message = message.data;
    json = JSON.parse(message);
    ws.send(' ');
    switch(json[0]){
      case 1 :
        mes.textContent += `\n\n${json[1]}`;
        mes.scrollTop = mes.scrollHeight;
      break;
      case 2:                    
        ms.innerHTML = json[1];
      break;
      case 3:
        label.innerHTML = json[1];
      break;
    }
    };

ws.onclose = function(){
  alert('websocket close');
}
