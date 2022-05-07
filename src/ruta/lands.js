const { Router } = require('express');
const router = Router();
const _= require('underscore');
const lands= require('../lands.json');



router.get('/',(req,res) =>{
    res.json(lands);
    var res = _(lands).chain().
    pluck('quarter1').
    flatten().
    findWhere({id: 3}).
    value();
    console.log(res);
});

router.post('/',(req,res) =>{

    //console.log(req.body);
    
    _.each(lands,(land , i) =>{//recorro los array del json
      

        //console.log(land.id);
        res.send(land);
    });
    /*const{tierra,position} =req.body;
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
    }*/
    
    res.json(lands);
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

