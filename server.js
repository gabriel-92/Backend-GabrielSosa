const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(
        '<h1>All products</h1> '
    );
}
);
app.get('products-randoms', (req, res) => {
    res.send('<h1>Products Randoms</h1>');
    //mostar un producto de la base de datos aleatorio

}
);
app.get('products-by-name', (req, res) => {
    res.send('<h1>Products By Name</h1>');
    //mostar un producto de la base de datos por nombre
}
);


const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})

server.on("error", err => console.log(`Error en el servidor: ${err}`))