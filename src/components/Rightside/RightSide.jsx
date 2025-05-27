import React,{useState} from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Setting from "../../img/setting.png";
import Notification from "../../img/notification.png";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";
import ShareModel from "../ShareModel/ShareModel";

const RightSide=()=>{
    const [modelOpened,setModelOpened]=useState(false);
    return(
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <img src={Setting} alt="" />
                <img src={Notification} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard/>
            <button className="button r-button" onClick={()=>setModelOpened(true)}>
                Share
            </button>
            <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
        </div>
    )
}

export default RightSide;