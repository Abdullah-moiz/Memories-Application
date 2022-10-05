import express from 'express'
const Router = express.Router();
import {getPost , createPost, updatePost}  from '../Controllers/post.js'


Router.get('/',getPost)
Router.post('/',createPost)
Router.patch('/:id' , updatePost)

export  default Router;