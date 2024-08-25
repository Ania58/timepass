
const validarHora =(req,res,next)=> {
 console.log(req.hour);
 const hour = req.hour //trae del navegador y lo guarda
 if(hour>12){
    req.isValid = true
 }else {
    res.locals.message = `Aún no es la hora, espera hasta las 14:00 para entrar`
 }
 next()
}

module.exports = validarHora