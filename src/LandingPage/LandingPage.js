import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component{
    render(){
    return(
        <div className = "welcome">
        <h1>Welcome to Flash</h1>
        <h4>Flash is an Educational Tool. A user can create a Flash project with cards and view them later. Cards and projects can be edited and deleted. Enjoy!</h4>
        <div className = "button-list">
        <Link to = "/new-project" className= "addNew">Create a New Flash Project</Link>
        <Link to = "/list" className= "viewProjects">View Existing Projects</Link>
        </div>
        </div>
    )
}
}
