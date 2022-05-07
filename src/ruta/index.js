const { Router } = require("express");
const router =Router();


router.get('/test', (req,res) =>{
    
    const data ={
        "name":"Anto",
        "web":"Educa"
    }
    res.json(data);
});

module.exports =router;
