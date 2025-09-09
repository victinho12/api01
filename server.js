const express = require("express");

const app = express();

app.use(express.json());

const saudacoesRecurso = require("./recursos/saudacoes");

app.use("/saudacoes",saudacoesRecurso)

const port = 3000;

app.listen(port, ()=> {
    console.log("api inicializada");
})