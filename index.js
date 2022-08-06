const express = require("express");
const app = express();
const records = require("./container/script.js")
let data = new records("./product.txt");



app.get('/products', (req, res) => {
    data.getAll()
        .then((data) => {
            res.send(data);
        }).catch(err => {
            res.send(err);
        });
})
app.get("/productRandom", (req, res) => {
    data.getRandom()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.send(err);
        });
});


const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})

server.on("error", err => console.log(`Error en el servidor: ${err}`))