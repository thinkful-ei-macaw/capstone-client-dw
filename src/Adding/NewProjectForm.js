import React from 'react';

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
        .then(data => {console.log(data);
            this.props.history.push("/new-card/"+data[0])
        })
    };

    render() {
        return (
            <form onSubmit={this.submitProject}>
                <label>
                    Project Name:
                    <input type="text" name="projectName" />
                    <input type="submit" value="Submit"/>
                </label>
            </form>
         
        );
    }
}

  // <input type="submit" value="Submit" />
   // <Link to = "/new-card/:projectId" className= "begin">Begin</Link>
// //    fetch("http://localhost:8000/api/projects"
// <Link to = {'/card-list/'+this.props.match.params.projectId}>Add Card</Link>