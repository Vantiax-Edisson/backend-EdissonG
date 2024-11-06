import Post from "../../models/Post.js";
import "../../models/User.js";  // Importa directamente el modelo User

let allUser = async (req,res,next) => {
    try {
        
        let {name,role} = req.query
        console.log(name);
        console.log(role);
        let query = {}
        
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}
        }
        


        let all = await Post.find(query)
        .populate('user', 'name email') // Solo traemos el nombre y el email del autor
        .exec();

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export {allUser} 