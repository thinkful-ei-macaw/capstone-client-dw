import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

export default class CardList extends Component{
    state={
        cards:[],
        flipCard: null,
        cardsOrder:0
    }
    componentDidMount(){
        this.getCard()
    }
    handleFlipCard=(id)=>{
        this.setState({
            flipCard:id
        })
    }
    // nextCard
   
    getCard = () => {
        fetch(`http://localhost:8000/api/cards/${this.props.match.params.projectId}`,{
            method:"get",
            headers:{
                "content-type": "application/json"
            } ,
        })
        .then(res => res.json())
        .then(data => {
           for(let i =0;i<data.length;i++){
         const number=Math.floor(Math.random()*data.length);
         const temp=data[i];
         data[i]=data[number];
         data[number]=temp;
        
    
        }
           this.setState({
               cards:data,
           })
        })
    };
    deleteProject = () => {
        fetch(`http://localhost:8000/api/projects/${this.props.match.params.projectId}`,{
            method: "delete",
            headers:{
                "content-type": "application/json"
            },
        })
        .then(data => {
           this.props.history.push("/list")
        })
    };
    deleteCard = (id) => {
        fetch(`http://localhost:8000/api/cards/${id}`,{
            method: "delete",
            headers:{
                "content-type": "application/json"
            },
        })
        .then(data => {
           this.getCard()
        })
    };

    render(){
    
const card=this.state.cards[this.state.cardsOrder] || {}
    return(
     <div>
    
         <li>
         <ReactCardFlip isFlipped={this.state.flipCard===card.id} flipDirection="vertical">
         <p><button onClick={e=>this.handleFlipCard(card.id)}>Click to flip</button>
         <button onClick={e => this.deleteCard(card.id)} className="deleteCards">Delete a Card</button>
         {card.question}</p>
         <p><button onClick={e=>this.handleFlipCard()}>Click to flip</button>
         {card.answer}</p>
         </ReactCardFlip>
         <button onClick={e=>this.nextCard()} className="next-button">Next</button>
         <button onClick={e=>this.previousCard()} className="previous-button">Next</button>

         </li>
     

     <Link to = {'/new-card/'+this.props.match.params.projectId}>Add More Cards</Link>
     <button onClick={this.deleteProject} class="delete">Delete</button>
     </div>
    )
}
}
// getRandomCard(currentCards){
//     let card = currentCards[Math.floor(Math.random()*currentCards.length)]
// }






// import React, {Component}  from 'react';
// import {Link} from 'react-router-dom';

// export default class CardList extends Component{
//     state={
//         cards:[]
//     }
//     componentDidMount(){
//         this.getCard()
//     }
//     getCard = () => {
//         fetch(`http://localhost:8000/api/cards/${this.props.match.params.projectId}`,{
//             method:"get",
//             headers:{
//                 "content-type": "application/json"
//             } ,
//         })
//         .then(res => res.json())
//         .then(data => {
//            this.setState({
//                cards:data
//            })
//         })
//     };

//     render(){
    

//     return(
//      <div>
//      {this.state.cards.map(card => (
//          <>
//          <li>{card.question}</li>
//          <li>{card.answer}</li>
//          </>
//      ))}

//      <Link to = {'/new-card/'+this.props.match.params.projectId}>Add Card</Link>
//      </div>
//     )
// }
// }


