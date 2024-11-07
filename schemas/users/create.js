import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':'No sea tonto no le estoy pidiendo numeros',
        'string.alphanum':'No uses caracteres Especiales'
    }),
    email: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required().min(2).max(5).messages({
        'number.min':'Minimos son 2 digitos',
        'number.max':'Maximo son 5 digitos'
    }),
    auto: joi.objectId().required()
})

export default schema