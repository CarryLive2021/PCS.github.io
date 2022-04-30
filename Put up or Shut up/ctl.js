document.addEventListener("DOMContentLoaded", event => {

    document.querySelector("#pass").addEventListener('click', () => {
        let txt = "pass";
        ws.send(txt);
    })
    document.querySelector("#fail").addEventListener('click', () => {
        let txt = "fail";
        ws.send(txt);
    })
    document.querySelector("#reset").addEventListener('click', () => {
        let txt = "reset";
        ws.send(txt);
    })
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
});