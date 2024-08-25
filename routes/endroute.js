const express = require('express')
const app = express()
const router = express.Router()

router.get('/',(req,res)=>{
    
    res.send('<h1>Ruta Final</h1><p>Bienvenido a la ruta final</p>')
})

router.get('/aprendiendo',(req,res)=>{
    
    res.send('<h1>Bienvenido a aprendiendo</h1><p>Bienvenido a la ruta final</p>')
})

module.exports = router