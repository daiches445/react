import './Style/stylesheet.css';
import React, { Component} from 'react'

import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Login from './FCLogin';
import Main from './CCMain';
import Register from './CCRegister';
import Notes from './FCNotes';


class App extends Component{
  
constructor(props) {
  super(props)

  this.state = {
    users:[
      {username:"eli",password:"1234",notes:[]},
      {username:"eli2",password:"1234",notes:[]} 
   ],
   current_user:undefined
  }
}



   AddUser=(u)=>{
     let arr = this.state.users;
    //  if(arr[arr.findIndex(e=>e.username===u.username)]!==-1)
    //     return 'block'
     u={username:u.username,password:u.password,notes:[]}
     arr.push(u);
     console.log(arr);
     this.setState({users:arr})
     
   }

  SetUser=(u)=>{
    this.setState({current_user:u})
   }

   AddNote=(val)=>{
        let arr = this.state.users;
        let index = arr.findIndex((u)=>u.username === this.state.current_user)
        arr[index].notes.push({title:val.title,text:val.text})
        console.log(arr[index]);
        this.setState({users:arr})
   }
   RemoveNote=(i)=>{
      let f_users = this.state.users;
      let user_index = f_users.findIndex(u=>u.username === this.state.current_user);
      f_users[user_index].notes = f_users[user_index].notes.filter((item,index)=>index !== i)

      this.setState({users:f_users})
      
   }

   Logout=()=>{
     this.setState({current_user:undefined})
   }
   render(){
    return(
      <Switch>
      <Route exact path='/' render={()=><Login SetUser={this.SetUser} users={this.state.users}></Login>}/>
      <Route path="/CCmain" render={()=><Main Logout={this.Logout} AddNote={this.AddNote} user={this.state.current_user}></Main>}/>
      <Route path='/CCRegister' render={()=><Register users = {this.state.users} AddUser={this.AddUser}></Register>}/>
      <Route path='/FCnotes' render={()=><Notes RemoveNote={this.RemoveNote} user={this.state.users[this.state.users.findIndex(u=>u.username === this.state.current_user)]}></Notes>}/>
      
    </Switch>
    )
   }
  
}

export default withRouter(App);
