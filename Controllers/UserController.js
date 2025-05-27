import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";


//get a user
export const getUser= async (req,resp)=>{
    const id = req.params.id;

    
    try{
        const user = await UserModel.findById(id);

        if(user)
        {
            const {password, ...otherDetails}= user._doc
            
            resp.status(200).json(otherDetails)
        } 
        else
        {
            resp.status(404).json("No such user exists")
        }
    } catch (error){
    
        resp.status(500).json(error)
    }
};


//update a user

export const updateUser= async(req,resp)=> {
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus, password}=req.body

    if(id === currentUserId || currentUserAdminStatus)
    {
        try{
           

            if(password)
            {
                const salt =await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt)
            }
            

    const user = await UserModel.findByIdAndUpdate(id,req.body, {new: true});

            resp.status(200).json(user);
        } catch (error) {
            resp.status(500).json(error);
        }
    }
    else{
        resp.status(403).json("Access Denied : you can only update your your own profile")
    }
}


// delete a user

export const deleteUser= async (req,resp)=>{
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus} = req.body
    
    if (currentUserId === id || currentUserAdminStatus)
    {
        try{
            await UserModel.findByIdAndDelete(id)
            resp.status(200).json("User delete successfuly")
        } catch (error){
        
            resp.status(500).json(error);
        }
    } 
    else{
        resp.status(403).json("Access Denied : you can only delete your your own profile")
    }   
};

// Follow a User

export const followUser= async (req, resp)=>{
    const id = req.params.id;
    const {currentUserId}=req.body;

    if(currentUserId === id)
    {
        resp.status(403).json("Action forbidden");
    }
    else{
        try{
            const followUser= await UserModel.findById(id);
            const followingUser= await UserModel.findById(currentUserId);

            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push: {followers: currentUserId} })
                await followingUser.updateOne({$push: {followings: id}})
                resp.status(200).json("User followed!")
            }
            else
            {
                resp.status(403).json("User is Already followed by you!")
            }
        } catch(error){
            resp.status(500).json(error);
        }
    }
};



// Unfollow a User


export const UnFollowUser= async (req, resp)=>{
    const id = req.params.id;
    const {currentUserId}=req.body

    if(currentUserId === id)
    {
        resp.status(403).json("Action forbidden");
    }
    else{
        try{
            const followUser= await UserModel.findById(id);
            const followingUser= await UserModel.findById(currentUserId);

            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$pull: {followers: currentUserId} })
                await followingUser.updateOne({$pull: {followings: id}})
                resp.status(200).json("User Unfollowed!")
            }
            else
            {
                resp.status(403).json("User is not followed by you")
            }
        } catch(error){
            resp.status(500).json(error);
        }
    }
};

