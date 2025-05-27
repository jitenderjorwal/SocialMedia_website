import React , {useState} from 'react';
import "./InfoCard.css";
import {UilPen} from "@iconscout/react-unicons"
import ProfieModel from '../ProfileModel/ProfileModel';
const InfoCard=()=>{

    const [modelOpened,setModelOpened]=useState(false)

    return(
        <div className="InfoCard">
            <div className="infoHead">
            <h4>Your Info</h4>

            <div>
            <UilPen width="2rem" height="1.2rem" onClick={()=>setModelOpened(true)} />

            <ProfieModel modelOpened={modelOpened} setModelOpened={setModelOpened} />

            </div>
           
            </div>
            <div className="info">
                <span>
                    <b>Status:</b>
                </span>
                <span> bus Zindagi kat rhi h</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives:</b>
                </span>
                <span> Faridabad</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at:</b>
                </span>
                <span> IBM PVT.LTD</span>
            </div>

        <button className="button logout-button">Logout</button>

        </div>
    )
}

export default InfoCard;