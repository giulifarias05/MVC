const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Conexión a la base de datos de MongoDB
mongoose
    .connect(
        "mongodb+srv://gfarias:giulimaxithiago123@nuevocluster.islb83v.mongodb.net/test",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch((err) => console.log(err));

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});
