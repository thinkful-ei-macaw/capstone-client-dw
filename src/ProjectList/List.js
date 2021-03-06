import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import './List.css';
import config from  '../config';

export default class List extends Component{
    state={
        projects:[]
    }
    componentDidMount(){
        this.getProject()
    }
    getProject = () => {
            fetch(`${config.API_ENDPOINT}/api/projects`,{
            method:"get",
            headers:{
                "content-type": "application/json"
            } ,
        })
        .then(res => res.json())
        .then(data => {
           this.setState({
               projects:data
           })
        })
    };

    render(){
    

    return(
     <div>
     {this.state.projects.map(project => (
         <li key={project.id}>{project.project_name} 
         <Link to = {"/card-list/"+project.id} className="viewCards">View</Link>
         <Link to = {"/project-manager/"+project.id} className="viewCards">Edit Project</Link>

         </li>

     ))}
     </div>
    )
}
}
