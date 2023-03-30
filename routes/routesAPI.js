const express = require('express')

const router = express.Router()

const pool = require('../database')


router.get('/',(req,res)=>{
    pool.query('select * from dataUser',(err,response)=>{
        res.json(response)
    })
})

router.get('/:id',(req,res)=>{
    pool.query('select * from dataUser where id ='+req.params.id,(err,response)=>{
        res.json(response)
    })
})

router.post('/',(req,res)=>{
    pool.query("insert into dataUser(id,nombre,descripcion) values ('"+req.body.id+"','"+req.body.nombre+"','"+req.body.descripcion+"')", (err,response)=>{
        res.json({status:'data saved'})
    })
})

router.delete('/:id',(req,res)=>{
    pool.query('delete from dataUser where id='+req.params.id,(err,response)=>{
        res.json({status:'task deleted'})
    })
})

module.exports = router