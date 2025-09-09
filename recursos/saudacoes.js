const express = require("express");
const router = express.Router();

let saudacoes = [
    {id: 1, saudacoes: "bem vindo"},
    {id: 2, saudacoes: "wellcome"},
];

router.get("/", (request, response) => {
    response.json(saudacoes)
})

module.exports = router
