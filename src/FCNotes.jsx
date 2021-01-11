
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Style/stylesheet.css';

class Notes extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    RemoveNote = (i) => {
        this.props.RemoveNote(i)
    }

    render() {
        let content;

        if (this.props.user !== undefined) {
            content =
                <div className="container">

                    <div className="app">
                        <h2>Notes</h2>
                        <div id="notes">
                        {this.props.user.notes.map((n, index) => {
                            return (
                                <div className="note" id={index}  >
                                    <p>{n.title}</p>
                                    <p>{n.text}</p>
                                    <button onClick={() => this.RemoveNote(index)}>Delete</button>
                                </div>
                            )
                        })}
                        </div>

                        <Link to="/CCmain">Back to adding notes</Link>
                    </div>

                </div>
        }
        else
            content = <div>{this.props.history.push('/')}</div>

        return (
            content
        )
    }
}


export default withRouter(Notes)