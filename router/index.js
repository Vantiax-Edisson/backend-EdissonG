import { Router } from "express";
import usersRouter from './users.js'
import usersPosts from './posts.js'
import auth from './auth.js'

const routerIndex = Router()
routerIndex.use('/users', usersRouter)
routerIndex.use('/posts', usersPosts)
routerIndex.use('/auth', auth)

export default routerIndex