const express = require("express");

const app = express();

const PORT = 3000;

const cumprimentos_router = require("./rotas/japones");

app.use(express.json());
app.use("/japones",cumprimentos_router);


app.get('/',(req,res)=>{res.send("こんにちは")});



app.listen(PORT,()=>{console.log("Estou no ar , http://localhost:3000/japones")});


