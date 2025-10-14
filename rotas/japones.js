const express = require("express")
const router = express.Router();

let japones = [
    {id: 1, msg: "こんにちは"},    
    {id: 2, msg: "おはようございます"},
    {id: 3, msg: "おはよう"}
];

router.get("/",(req,res)=>{res.json(japones)})

router.get("/:id",(req,res)=>{
    
    ///variavel de controle
    let japa = "nao encontrei";

    //converter em inteiro
    const id = parseInt(req.params.id); 

    //inicializar o for
    for(let i =0 ; i< japones.length; i++ ){

        //criar a logica para encontrar a compri
        if(japones[i].id == id){
            japa = japones[i].msg;
            break;
        }
    }

    res.send(japa);

})
// router.post("/", (req,res) => {

//     const novoItem = [
//         {id: 4, msg: req.body.msg}
//     ]
//     for(let i =0; i < novoItem.length; i++){
//         japones.push(novoItem[i].id)
//     }
//     res.json(novoItem)
//         // res.json("foiiiiii"
//         // japones.push(novoItem)
//         // res.json(novoItem)
// })
router.post("/", (req, res) => {
    for(let i = 0; i < req.body.length; i++){
        let novoItem = {id: japones.length + 1, msg: req.body[i].msg}
        japones.push(novoItem);
    }
    res.json(japones)
    console.table(req.body)

});

module.exports = router;
