import { Router } from "express";
import usersRouter from './users.js'
import usersPosts from './posts.js'

const routerIndex = Router()
routerIndex.use('/users', usersRouter)
routerIndex.use('/posts', usersPosts)

export default routerIndex