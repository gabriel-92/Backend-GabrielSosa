const express = require("express");
const app = express();
//import script from "./script.js";
app.get('/', (req, res) => {
    res.send(
        //'<h1>All products</h1> '
        // + '<a href="/products/new">New product</a>'
        // + '<a href="/products/deleteAll">Delete all</a>'
        // + '<a href="/products/delete/:id">Delete</a>'
        // + '<a href="/products/edit/:id">Edit</a>'
        // + '<a href="/products/getById/:id">Get by id</a>'
        // + '<a href="/products/getAll">Get all</a>'
        // + '<a href="/products/update/:id">Update</a>'
        '<a href="/products/updateById/:id">UpdateById</a>'
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