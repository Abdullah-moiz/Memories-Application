import mongoose from "mongoose";
import PostMessage from "../models/postModels.js"


export const getPost =async (req, res) => {
   try {
    const  postMessage = await PostMessage.find();
    console.log(postMessage)
    res.status(200).json(postMessage)
   } catch (error) {
    res.status(404).json(error.message)
   }
}


export const createPost = async (req,res) => {
    const postBody = req.body;

    const NewPosts = new PostMessage(postBody)
    try {
        await NewPosts.save()
        res.status(201).json(NewPosts)
    } catch (error) {
        res.status(409).json(error.message)
    }
}


export const updatePost = async(req,res) => {
    const { id : _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send('No Post Available For Such ID')
    }
    
    const updatesPost = await PostMessage.findByIdAndUpdate(_id , post , {new : true})
    res.json(updatePost);
}