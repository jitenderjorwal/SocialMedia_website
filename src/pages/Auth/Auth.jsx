import React from "react";
import "./Auth.css";
import logo from "../../img/logo (3).png";

const Auth= () =>{
    return(
        <div className="Auth">
            <div className="a-left">
                <img src={logo} alt="" />
                <div className="webname">
                    <h1>Finefilms</h1>
                    <h6>Explore the nation before the world</h6>
                </div>
            </div>

        {/* <SignUp/> */}
        <LogIn/>
        </div>
    )
}


function LogIn(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                <input 
                    type="text" 
                    placeholder="User Name" className="infoInput" 
                    name="user name" 
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    placeholder="Password" 
                    className="infoInput" 
                    name="password" 
                    />
                </div>

                <div>
                    <span style={{fontSize:'12px'}}>Don't have an account Sign up</span>
                    
                    <button className="button infoButton" type="submit">Login</button>
               
                </div>

            </form>
        </div>
    )
}


function SignUp(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>

                <div>
                    <input 
                    type="text" 
                    placeholder="First Name" className="infoInput" 
                    name="first name" 
                    />

                    <input 
                    type="text" 
                    placeholder="Last Name" className="infoInput" 
                    name="last name" 
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    placeholder="User Name" className="infoInput" 
                    name="user name" 
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    placeholder="Password" 
                    className="infoInput" 
                    name="password" 
                    />
                    <input 
                    type="text" 
                    placeholder="ConfirmPass" 
                    className="infoInput" 
                    name="confirm password" 
                    />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
                </div>

            <button className="button infoButton" type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default Auth;