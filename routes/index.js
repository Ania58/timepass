const express = require('express')
const app = express()
const router = express.Router()
const endroute = require('./endroute')

router.get('/',(req,res)=>{
    const message = req.query.mensaje || ''
    console.log(message);
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const time = `${hour}: ${minutes}`;
    //console.log(req.hour, 'esta es la variable del navegador');
    
    res.send(`<h1>Bienvenido</h1><p>La hora actual es: ${time}</p> <span>${message}</span> <button><a href="/validation">Entrar</a></button>`)
})

router.get('/validation',(req,res)=>{
    const isValid = req.isValid
    const message = res.locals.message
  if (isValid) {
    res.redirect('/endroute')
  } else {
    res.redirect('/?mensaje=' + encodeURIComponent(message));
  }
    
})

router.use('/endroute',endroute) //lo primero es el endpoint y el segundo el script

router.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

module.exports = router