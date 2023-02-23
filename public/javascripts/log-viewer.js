console.log("Log-Viewer init...");

const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector('#log-window');
const filePath = document.getElementById('logFilePath').value;

connection.onopen = () => { 
    if (filePath) {
        console.log("Sending FilePath: " + filePath);
        connection.send(filePath); 
    }
}
let msgnum = 0;
connection.onmessage = (event) => {
    console.log("Receiving Data(" + msgnum++ + "): " + event.data.length);
    const logs = event.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs; // event.data;
    connection.send("Thanks");
}
connection.onclose = (connection) => {connection.send("bye bye.")}
console.log("Log-Viewer setup complete.");
