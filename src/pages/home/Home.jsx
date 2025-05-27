import RightSide from "../../components/Rightside/RightSide";
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css"
import React from 'react';

const Home=()=>{
    return(
        <div className='Home'>
            <ProfileSide/>
            <PostSide />
            <RightSide/>

        </div>
    )
}

export default Home;