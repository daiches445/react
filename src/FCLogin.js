import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Main from './CCMain';
import './Style/stylesheet.css';



function Login(props){


    let password;
    // const [msg,setMsg] = useState('');
    const [dspNoneUser,setDspUser] = useState('none');
    const [dspNonePass,setDspPass] = useState('none');
    const [userName,setUserName] = useState('');
    

    function GetVAl(e) {
      let val = e.target.value;
      if(e.target.id === "user_name")
        setUserName(val)
      else
        password = val;
  
    }
  
    function Login(){
      let user_i = props.users.findIndex((e)=> e.username === userName)
      console.log(user_i);
      if(user_i !== -1)
      {
        setDspUser('none')
        console.log(props.users[user_i]);
        console.log(password);

        if(props.users[user_i].password === password)
        {
          console.log(props);
          props.SetUser(props.users[user_i].username)
          props.history.push('/CCmain')
        }
         else
           setDspPass('block')
        
      }
      else
       setDspUser('block')
    }
    return (
      <div className="container">
  
        <div className="space">
        </div>
  
        <div className="app">
  
          <h1>LOGIN</h1>
  
          <div className="field" >
            <label htmlFor="">USERNAME: </label>
            <input id="user_name" onChange={GetVAl}></input>
            <p style={{display:dspNoneUser ,color:'red',margin:"0px"}}>invalid user name</p>
          </div>
          <div className="field" >
            <label htmlFor="">PASSWORD: </label>
            <input id="password" type="password" onChange={GetVAl}></input>
            <p style={{display:dspNonePass ,color:'red',margin:"0px"}}>incorrect password</p>
          </div>
  
          <div className="btn_link" >
            <button onClick={Login}>Enter</button>
            <Link className="link" to="/CCRegister">register</Link>
          </div>
  
        </div>
      </div>
    );
}

export default withRouter(Login)