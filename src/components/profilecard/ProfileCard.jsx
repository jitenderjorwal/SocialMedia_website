import "./ProfileCard.css";
import React from 'react';
import Cover from '../../img/covercrop.jpg';
import Profile from '../../img/profileImg.jpg';


const ProfileCard=()=>{

const ProfilePage=true;

    return(
            <div className='ProfileCard'>
                <div className="ProfileImages">
                    <img src={Cover} alt="" />
                    <img src={Profile} alt="" />
                </div>

                <div className="ProfileName">
                    <span>Shakira</span>
                    <span>Dancer/Singer</span>
                </div>

                <div className="followStatus">
                    <hr />
                    <div>
                    <div className="follow">
                        <span>6</span>
                        <span>Followings</span>
                    </div>
                    <div id="vl">&nbsp;</div>
                    <div className="follow">
                    <span>70 millions</span>
                        <span>Followers</span>
                    </div>
                    {ProfilePage && (
                        <>
                        <div id="vl">

                        </div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                        </>
                    )}
                    </div>
                    <hr />
                </div>
                {ProfilePage?'':<span>My Profile</span>}
                
            </div>
            
    )
}

export default ProfileCard;