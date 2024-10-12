import { Router } from "express";
import usersRouter from './users.js'

const routerIndex = Router()

routerIndex.use('/users', usersRouter)

export default routerIndex