import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom'
import './Style/stylesheet.css';


class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             text:''
        }
    }
    
    SetVAl=(e)=>{
        
        let val = e.target.value;
        if(e.target.id === 'note_title'){
            this.setState({title:val})
        }
        else
            this.setState({text:val})
    }

    AddNote=()=>{
        let val = {title:this.state.title,text:this.state.text}
        this.props.AddNote(val)

    }

    Logout=()=>{
        this.props.Logout()
    }
    render() {
        return (
            <div className="container">
                <div className="space"></div>

                <div className="app">
                    
                    <h1>Welcome,{this.props.user === undefined ? this.props.history.push('/') : this.props.user}</h1>
                    <h2>add note</h2>

                    <div className="field" >
                        <label htmlFor="">title</label>
                        <input onChange={this.SetVAl} id="note_title" type="text"/>
                    </div>
                    <div className="field" >
                        <label htmlFor="">text</label>
                        <input onChange={this.SetVAl} id="note_text" type="text" style={{paddingBottom:"10vh"}}/>
                    </div>

                <div className="btn_link" >
                  <button onClick={this.AddNote}>Add Note</button>
                  <Link to="/FCNotes">GO 2 Notes</Link>
                  <Link to="/" onClick={this.Logout}>LOG OUT</Link>
                </div>
                </div>



            </div>
        )
    }
}

export default withRouter(Main)