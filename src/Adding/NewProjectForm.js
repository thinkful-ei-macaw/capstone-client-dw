import React from 'react';
import {Link} from 'react-router-dom';

export default class NewProjectForm extends React.Component {
    submitProject = (e) => {
        e.preventDefault();
        const name = e.target.projectName.value;
        console.log(name);
        fetch("http://localhost:8000/api/projects",{
            method:"post",
            headers:{
                "content-type": "application/json"
            } ,
            body: JSON.stringify({
                project_name: name
            })
        })
        .then(res => res.json())
        .then(data => {
            this.props.history.push("/new-card")
        })
    };

    render() {
        return (
            <form onSubmit={this.submitProject}>
                <label>
                    Project Name:
                    <input type="text" name="projectName" />
                </label>
                <Link to = "/new-card/:projectId" className= "begin">Begin</Link>

            </form>
         
        );
    }
}

  // <input type="submit" value="Submit" />