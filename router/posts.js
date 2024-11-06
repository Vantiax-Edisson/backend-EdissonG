import { Router } from "express";
import {allUser}  from "../controllers/posts/read.js";

const routerPosts = Router()

routerPosts.get('/all', allUser)

export default routerPosts