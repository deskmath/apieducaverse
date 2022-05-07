const { Router } = require('express');
const router = Router();
const _= require('underscore');
const lands= require('../land.json');



router.get('/',(req,res) =>{
    res.json(lands);
});

router.post('/',(req,res) =>{

    //console.log(req.body);
    //res.send('recived');
    const{tierra,position} =req.body;
    console.log(tierra + " " + position);
    if(tierra && position){
        
        const id= lands.length +1;
        //console.log(id);
        const newLand={...req.body,id};//todo el objeto
        console.log(newLand);
        res.json('saved');
        lands.push(newLand);
        res.json(lands);

    }else{
        res.status(500).json({error:'There was an error'});
    }
    
    res.json(land);
});

router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const{tierra,position} =req.body;
    if(tierra && position){
        _.each(lands,(land , i) =>{//recorro los array del json
      
            if(land.id == id){ //si es el mismo lo remuevo
                land.tierra = tierra; //cambio el valor
                land.position = position;//cambio el valor
            }
        });
       res.json(lands);

    }else{
        res.status(500).json({error:'error diferent data'});
    }


});

router.delete('/:id',(req,res) =>{

    const {id} = req.params;
    _.each(lands,(land , i) =>{//recorro los array del json
      
        if(land.id == id){ //si es el mismo lo remuevo
            lands.splice(i,1); //remueve el id y tansolo una tierra
        }
    });
    console.log(req.params);
    res.send(lands);
});
module.exports =router;

