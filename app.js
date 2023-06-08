const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/mostrar_sitio', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
});

 app.listen(3002, function () {
    console.log("Servidor corriendo");
});