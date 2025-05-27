import React from "react";
import "./Profile.css";
import ProfileLeft from "../Profileleft/ProfileLeft";
import ProfileCard from "../profilecard/ProfileCard";
import PostSide from "../postSide/PostSide";
import RightSide from "../Rightside/RightSide";


const Profile=()=>{
    return(
        <div className="Profile">
            <ProfileLeft/>

            <div className="Profile-center">
                <ProfileCard/>
                <PostSide/>
            </div>

            <RightSide />
        </div>
    )
}

export default Profile;