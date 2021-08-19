const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./models')
const {User} = require('./models');
const mysql = require('mysql2')

app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Server is running")
})

app.get('/users', (req,res)=>{
    User.findAll({where:{id:2}})
    .then((user) => res.json({data:user}))
})

app.post('/insert',(req,res)=>{
    console.log(req.body)
    User.create({
        firstName:req.body.firstname,
        age:req.body.age
    })
    .catch(err => console.log(err))
    res.json({msg:"Data inserted"})
})

app.post('/delete', (req,res)=>{
    User.destroy({where:{firstName:"Ana"}})
    .then((user)=>{
        res.json({message:`${user} deleted from db`})
    })
})



db.sequelize.sync().then((req)=>{
    app.listen(port)    
})
