import { Router } from "express";
import {allUser,userByRole,userById}  from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/role/:x',userByRole)
routerUsers.get('/id/:id',userById)
routerUsers.post('/create',create)
routerUsers.post('createAll',)

export default routerUsers