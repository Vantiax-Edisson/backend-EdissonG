function name(req,res,next) {
    try {
        jorgeEntendio = mongo.read
        next()
    } catch (error) {
        next(error)
    }    
}