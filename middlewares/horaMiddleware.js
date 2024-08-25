
const horaMiddleware = (req,res,next) => {
    const date = new Date()
    const hour = date.getHours()
    console.log(hour);
    
    req.hour = hour //una variable en el navegador

    next()
}

module.exports = horaMiddleware