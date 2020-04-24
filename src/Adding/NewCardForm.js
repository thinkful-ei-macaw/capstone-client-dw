import React from 'react';
import {Link} from 'react-router-dom';
import './NewCardForm.css';
import config from  '../config';


export default class NewCardForm extends React.Component {
    submitCard = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const answer = e.target.answer.value;
        const form = e.target;
        fetch(`http://localhost:8000/api/cards/${this.props.match.params.projectId}`,{
            // fetch(`${config.API_ENDPOINT}/api/cards/${this.props.match.params.projectId}`,{
            method:"post",
            headers:{
                "content-type": "application/json"
            } ,
            body: JSON.stringify({
                question: question,
                answer: answer
            })
        })
        .then(res => res.json())
        .then(data => {
        
         form.reset();

        })
        .catch(err =>console.log(err))
        // e.target.reset();
    };
    render() {
        return (
            <>
            <form onSubmit={this.submitCard}>
                <label className="q">
                    Question:
                    <input type="text" name="question" required/>
                </label>
                <label className="a">
                    Answer:
                    <input type="text" name="answer" required/>
                </label>
                <input type="submit" value="Submit" />
                </form>
            <Link to = "/list" className="listSubmit">Done</Link>
            </>
        );
    }
}
