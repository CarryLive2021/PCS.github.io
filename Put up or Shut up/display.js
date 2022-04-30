document.addEventListener("DOMContentLoaded", event => {
    // 建立 WebSocket (本例 server 端於本地運行)
    let url = 'ws://211.21.190.207:3000'
    var ws = new WebSocket(url)
    // 監聽連線狀態
    ws.onopen = () => {
        console.log('open connection')
    }
    ws.onclose = () => {
        console.log('close connection');
    }

    //接收 Server 發送的訊息
    ws.onmessage = event => {
        let txt = event.data
        if (txt == "pass") {
            document.getElementById('pass').style.display = "block";
            document.getElementById('pass').currentTime = 0;
            document.getElementById('fail').currentTime = 0;
            document.getElementById('pass').play();
            document.getElementById('fail').style.display = "none";
        }
        else if (txt == "fail") {
            document.getElementById('fail').style.display = "block";
            document.getElementById('pass').currentTime = 0;
            document.getElementById('fail').currentTime = 0;
            document.getElementById('fail').play();
            document.getElementById('pass').style.display = "none";
        }
        else if (txt == "reset") {
            document.getElementById('pass').currentTime = 0;
            document.getElementById('fail').currentTime = 0;
            document.getElementById('pass').style.display = "none";
            document.getElementById('fail').style.display = "none";
        }
        console.log(txt);
    }
});