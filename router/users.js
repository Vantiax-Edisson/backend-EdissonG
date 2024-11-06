import { Router } from "express";
import {allUser,userByRole,userById}  from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";
import { update } from "../controllers/users/update.js";
import { deleteOne } from "../controllers/users/delete.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/role/:x',userByRole)
routerUsers.get('/id/:id',userById)
routerUsers.post('/create',create)
routerUsers.put('/update',update)
routerUsers.delete('/deleteOne',deleteOne)

export default routerUsers