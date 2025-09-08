const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {console.log("rodandos", port)})

app.get("/", (request, reponse) => {
    reponse.send("hi, wellcome to the my api");
});

app.get("/studants",(request, reponse) => {
    reponse.send("hi studant");
});
