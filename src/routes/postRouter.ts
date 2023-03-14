import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { PostDTO } from "../dtos/PostDTO";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export const postRouter = express.Router()

const postController = new PostController(

    new PostBusiness(
        new PostDatabase(),
        new UserDatabase(),
        new IdGenerator(),
        new TokenManager()      
    ),
    new PostDTO())

postRouter.get("/", postController.getPosts)
postRouter.get("/:id", postController.getPostsbyId)
postRouter.post("/", postController.insertNewPost)
postRouter.post("/:id", postController.insertNewComment)
postRouter.put("/:id", postController.updatePost)
postRouter.delete("/:id", postController.deletePost)
postRouter.put("/:id/like", postController.likeDislike)