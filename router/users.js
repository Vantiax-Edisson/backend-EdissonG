import { Router } from "express";
import {allUser,userByRole,userById}  from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import { update } from "../controllers/users/update.js";
import { deleteOne } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const routerUsers = Router()

routerUsers.get('/all',passport.authenticate('jwt',{session:false}), allUser)
routerUsers.get('/role/:x',passport.authenticate('jwt',{session:false}),userByRole)
routerUsers.get('/id/:id',passport.authenticate('jwt',{session:false}),userById)
routerUsers.post('/register',passport.authenticate('jwt',{session:false}),validator(schemaUsersCreated),accountExists,createHash,register)
routerUsers.put('/update',passport.authenticate('jwt',{session:false}),update)
routerUsers.delete('/deleteOne',passport.authenticate('jwt',{session:false}),deleteOne)

export default routerUsers