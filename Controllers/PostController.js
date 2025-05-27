import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

//Create new Post 
export const createPost = async(req,resp)=>{
    const newPost= new PostModel(req.body)

    try {
        await newPost.save()
        resp.status(200).json("post created!")
    } catch (error) {
        resp.status(500).json(error)
    }
}


// Get a post

export const getPost = async(req,resp)=>{
    const id= req.params.id

    try {
        const post = await PostModel.findById(id)
        resp.status(200).json(post)
    } catch (error) {
        resp.status(500).json(error)
    }
}

// Update a Post

export const updatePost = async(req,resp)=>{
    const postId= req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(postId)
        if(post.userId === userId)
        {
            await post.updateOne( {$set : req.body})
            resp.status(200).json("Post Updated")
        }
        else
        {
            resp.status(403).json("Action forbidden")
        }
        
    } catch (error) {
        resp.status(500).json(error)
    }
}

// Delete a user

export const deletePost= async (req,resp)=>{
    const id = req.params.id;
    const {userId} = req.body
    
    
        try{
            const post= await PostModel.findById(id)
            if(post.userId === userId)
            {
                await post.deleteOne();
                resp.status(200).json("Post delete successfuly")   
            }
            else{
                resp.status(403).json("Action forbiden")
            }
            
        } catch (error){
        
            resp.status(500).json(error);
        }
      
};

// like/ dislike post

export const likePost = async(req,resp)=>{
    const id= req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)
        if(!post.likes.includes(userId))
        {
            await post.updateOne( {$push : {likes : userId}})
            resp.status(200).json("Post liked")
        }
        else
        {
            await post.updateOne( {$pull : {likes : userId}})
            resp.status(200).json("Post unliked")
        }
        
    } catch (error) {
        resp.status(500).json(error)
    }
}


// Timeline Post

export const getTimelinePosts = async (req,resp)=>{
    const userId = req.params.id

    try {
        const currentUserPosts = await PostModel.find({userId : userId})
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from:"posts",
                    localField: "followings",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts :1,
                    _id : 0
                }
            }
        ])
        resp.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts))
        .sort((a,b)=>{
            return b.createdAt - a.createdAt;
        });
    } catch (error) {
        resp.status(500).json(error)
    }
};