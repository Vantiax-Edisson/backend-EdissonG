import { Router } from "express";
import {allUser,userByRole}  from "../controllers/users/read.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/role/:x',userByRole)

export default routerUsers