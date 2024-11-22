import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    console.log(req.user);
    
    const token = jwt.sign(
        {email: req.user.email},
        process.env.SECRET,
        {expiresIn: 60*60*24}
    )
    req.token = token
    return next()
}