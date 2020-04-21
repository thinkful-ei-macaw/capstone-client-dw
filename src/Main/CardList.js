import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

export default class CardList extends Component{
    state={
        cards:[]
    }
    componentDidMount(){
        this.getCard()
    }
    getCard = () => {
        fetch(`http://localhost:8000/api/cards/${this.props.match.params.projectId}`,{
            method:"get",
            headers:{
                "content-type": "application/json"
            } ,
        })
        .then(res => res.json())
        .then(data => {
           this.setState({
               cards:data
           })
        })
    };

    render(){
    

    return(
     <div>
     {this.state.cards.map(card => (
         <>
         <li>{card.question}</li>
         <li>{card.answer}</li>
         </>
     ))}

     <Link to = {'/new-card/'+this.props.match.params.projectId}>Add Card</Link>
     </div>
    )
}
}


