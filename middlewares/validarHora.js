
const validarHora =(req,res,next)=> {
 console.log(req.hour);
 const hour = req.hour //trae del navegador y lo guarda
 if(hour>12){
    
 }
 next()
}

module.exports = validarHora