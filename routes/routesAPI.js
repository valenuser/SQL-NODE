const express = require('express')

const router = express.Router()



const pool = require('../database')
var {v4: uuidv4} = require('uuid')


router.get('/',(req,res)=>{
    pool.query('select * from dataUser',(err,response)=>{
        res.json(response)
    })
})

router.get('/:id',(req,res)=>{
    pool.query('select * from dataUser where id ="'+req.params.id+'"',(err,response)=>{
        res.json(response)
    })
})

router.post('/',(req,res)=>{
    pool.query("insert into dataUser(id,nombre,descripcion) values ('"+uuidv4()+"','"+req.body.nombre+"','"+req.body.descripcion+"')", (err,response)=>{
        res.json({status:'data saved'})
    })
})


router.put('/:id',(req,res)=>{
    pool.query("update dataUser set nombre='"+req.body.nombre+"', descripcion='"+req.body.descripcion+"' where id='"+req.params.id+"'",(err,response)=>{
        if(response){
            res.json({status:'task updated'})
        }else if(err){
            res.json({err:err})
        }
    })
})

router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    pool.query('delete from dataUser where id="'+req.params.id+'"',(err,response)=>{
        res.json({status:'task deleted'})
    })
})

module.exports = router