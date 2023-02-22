console.log("Log-Viewer init...");

const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.getElementById('log-window');
const filePath = document.getElementById('logFilePath').value;

connection.onopen = (connection) => { if (filePath) connection.send(filePath); }
connection.onmessage = (event) => {
    const logs = event.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs; // event.data;
}
connection.onclose = (connection) => {connection.send("bye bye.")}
console.log("Log-Viewer setup complete.");
