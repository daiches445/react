import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             re_pass:"",
             dsp_user:"",
             dsp_pass:"",
             dsp_repass:""
        }
    }
     

    GetVAl=(e)=>{
        let val = e.target.value;
        console.log(this.state.password);
        if(e.target.id === "user_name")
          this.setState({username:val,dsp_user:""})
        else if(e.target.id === "password"){
          this.setState({password:val})
        }
        else
          this.setState({re_pass:val})
      }



      Register=()=>{
        if(this.props.users.find((u)=>u.username === this.state.username)){
          return this.setState({dsp_user:"Invlid user name"})
        }

        if(this.state.password !== this.state.re_pass){
          return this.setState({dsp_repass:"passwords doesnt match"})
        }

        console.log(this.props.history);
        this.props.AddUser({username:this.state.username,password:this.state.password})
        this.props.history.push('/')
      }

    render() {
        return (
            <div className="container">
        
              <div className="space">
              </div>
        
              <div className="app">
        
                <h1>Register</h1>
        
                <div className="field" >
                  <label htmlFor="">Enter Username: </label>
                  <input id="user_name" onChange={this.GetVAl} placeholder="Username"></input>
                  <p style={{color:'red',margin:"0px"}}>{this.state.dsp_user}</p>
                </div>
                <div className="field" >
                  <label htmlFor="">Enter Password: </label>
                  <input id="password" onChange={this.GetVAl} placeholder="Password"></input>
                  <p style={{ color:'red',margin:"0px"}} placeholder="Password">{this.state.dsp_pass}</p>
                </div>
                <div className="field" >
                  <label htmlFor="">ReEnter Password: </label>
                  <input id="re_password" onChange={this.GetVAl} placeholder="ReEnter Password"></input>
                  <p style={{ color:'red',margin:"0px"}}>{this.state.dsp_repass}</p>
                </div>

                <div className="btn_link" >
                  <button onClick={this.Register}>Sign Up</button>
                  <Link to="/">back to login page</Link>
                </div>

              </div>
            </div>
          );
    }
}
export default withRouter(Register)

//-----pass check
// if(val.length <= 4)
// this.setState({dsp_pass:"Pass must be at least 4 digits long"})
// else if(val.length>4)
// this.setState({password:val})
// else 
// this.setState({dsp_pass:""})

//-----repass
// console.log(this.state.password);
// this.setState({dsp_repass:""})
// if(val !== this.state.password)
//    this.setState({dsp_repass:"not matching pass"})
// else if(val === this.state.password){
//   console.log("D");
//   this.setState({re_pass:val,dsp_repass:""}) 