import React, { useEffect, useState } from "react";
import axios from "axios";

import "./login.css";
import { Route , Redirect, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({setSendprn, login}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [sendPnr, setSendPnr] = useState();
const navigate = useNavigate();

const authAdmin=()=>{
  axios.post("http://localhost:8080/admin/login",{email:email,password:password}).then(response => {
    const {data} = response;
    //console.log(response);
    //console.log(data);
    //setSendPnr(data.prn);
    setSendprn(data.admin_id);
    //console.log(data.prn);
    if(data === "")
    {
      window.alert("Invalid details")
      return;
    }else{
      login()
      localStorage.setItem("isAdmin", true);
      navigate('/adminprofile');
    }
  })
}
const authStudent=()=>{
  axios.post("http://localhost:8080/login",{email:email,password:password}).then(response => {
    const {data} = response;
    //console.log(response);
    //console.log(data);
    //setSendPnr(data.prn);
    setSendprn(data.prn);
    localStorage.setItem("prn",data.prn);
    
    //console.log(data.prn);
    if(data === "")
    {
      window.alert("Invalid details")
      return;
    }else{
      login()
      navigate('/profile');  
    }
  })
}
  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="loginwrapper">
            <h1 className="login-heading ">Student Login</h1>
            <input onChange={(e) =>{
              setEmail(e.target.value)
            }}
              type="text"
              placeholder="Username"
              className="username-input"
            />
            <input onChange={(e) =>{
              setPassword(e.target.value)
            }}
              type="Password"
              placeholder="Password"
              className="password-input"
            />
            <button className="login-btn" onClick={authStudent}>
              sign in
            </button>
          </div>
          <div className="loginwrapper">
            <h1 className="login-heading ">Admin Login</h1>
            <input onChange={(e) =>{
              setEmail(e.target.value)
            }}
              type="text"
              placeholder="Username"
              className="username-input"
            />
            <input onChange={(e) =>{
              setPassword(e.target.value)
            }}
              type="Password"
              placeholder="Password"
              className="password-input"
            />
            <button className="login-btn" onClick={authAdmin}>
              sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );

}

export default Login;