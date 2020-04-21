import React from 'react';
import {Link} from 'react-router-dom';

export default class NewCardForm extends React.Component {
    submitCard = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const answer = e.target.answer.value;
        const form = e.target;
        fetch(`http://localhost:8000/api/cards/${this.props.matchm}`,{
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
                    <input type="text" name="question" />
                </label>
                <label className="a">
                    Answer:
                    <input type="text" name="answer" />
                </label>
                <input type="submit" value="Submit" />
                </form>
            <Link to = "/list">Done</Link>
            </>
        );
    }
}
