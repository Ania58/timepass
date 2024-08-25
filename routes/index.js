const express = require('express')
const app = express()
const router = express.Router()

router.get('/',(req,res)=>{
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const time = `${hour}: ${minutes}`;
    //console.log(req.hour, 'esta es la variable del navegador');
    
    res.send(`<h1>Bienvenido</h1><p>La hora actual es: ${time}</p><button><a href="/endroute">Entrar</a></button>`)
})

router.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

module.exports = router