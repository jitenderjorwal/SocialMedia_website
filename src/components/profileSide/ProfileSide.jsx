import React from 'react';
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profilecard/ProfileCard";
import "./ProfileSide.css"
import FollowersCard from '../FollowerCard/FollowersCard';




const ProfileSide=()=>{
    return(
            <div className='ProfileSide'>
                    <LogoSearch />
                    <ProfileCard />
                    <FollowersCard />
            </div>
            
    )
}

export default ProfileSide;