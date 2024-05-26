import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignUp = () => {

  const [state,setState]=useState("Login");
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const signup = async()=>{
    console.log("Sign Up function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }else{
      alert(responseData.errors);
    }
  }

  
  const login = async()=>{
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state==="Sign Up"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={state==="Login"?login:signup}>Continue</button>

        {state === "Sign Up" ? (
          <p className='login-signup-login'>Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
          ) : (
              <p className='login-signup-login'>Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
          )}

        <div className="login-signup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
