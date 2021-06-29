const http = require("http");
const puerto = 6969;
const red = "192.168.1.5";
const fs = require("fs").promises;

function myDrive(req, res) {
    let contenido;
    fs.readFile(__dirname+"/Index.html").then(contenido=>{
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contenido);
    });
    //res.end("Index.html");
}

let servidor = http.createServer(myDrive);

servidor.listen(puerto, red);

console.log("Corriendo...");