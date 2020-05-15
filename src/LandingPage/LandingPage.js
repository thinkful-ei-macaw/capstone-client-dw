import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component{
    render(){
    return(
        <div className = "welcome">
        <h1>Welcome to Flash</h1>
        <div className = "button-list">
        <Link to = "/new-project" className= "addNew">Create a New Flash Project</Link>
        <Link to = "/list" className= "viewProjects">View Existing Projects</Link>
        </div>
        </div>
    )
}
}
