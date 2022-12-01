var HOST = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(HOST);
var el;

ws.onmessage = function (event) {
  el = document.getElementById('server-time');
  el.innerHTML = 'Server time: ' + event.data;
};
//123
_ga=GA1.2.1109528843.1669732705;_gid=GA1.2.2034535752.1669890516;_gat_UA-238090400-1=1;_gat_UA-238090400-2=1
