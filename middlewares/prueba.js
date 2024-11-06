let contadorRutas = {}
const contador = (req,res,next) => {
    let ruta = req.url
    console.log(ruta);
    contadorRutas[ruta] = (contadorRutas[ruta] || 0) +1
    console.log(contadorRutas[ruta]);
    next()
    
}
export default contador