import React from 'react';
import config from  '../config';



export default class NewProjectForm extends React.Component {
    submitProject = (e) => {
        e.preventDefault();
        const name = e.target.projectName.value;
        console.log(name);
        // fetch("http://localhost:8000/api/projects",{
           fetch(`${config.API_ENDPOINT}/api/projects`,{
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
            this.props.history.push("/new-card/"+data[0])
        })
    };

    render() {
        return (
            <form onSubmit={this.submitProject}>
                <label>
                    Project Name:
                    <input type="text" name="projectName" required/>
                    <input type="submit" value="Submit"/>
                </label>
            </form>
         
        );
    }
}
