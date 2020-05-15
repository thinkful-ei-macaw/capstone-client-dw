import React, {Component}  from 'react';
import ReactCardFlip from 'react-card-flip';
import './CardList.css';
import config from  '../config';


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

    nextCard=()=>{
        if(this.state.cardsOrder>=this.state.cards.length){
            this.props.history.push("/list")
        }
        else
        {
            return  this.setState({cardsOrder:this.state.cardsOrder+1});
        }
    };
  
    getCard=()=>{
            fetch(`${config.API_ENDPOINT}/api/cards/${this.props.match.params.projectId}`,{
            method:"get",
            headers:{
                "content-type": "application/json"
            },
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

    deleteProject=()=>{
            fetch(`${config.API_ENDPOINT}/api/projects/${this.props.match.params.projectId}`,{
            method: "delete",
            headers:{
                "content-type": "application/json"
            },
        })
        .then(data => {
           this.props.history.push("/")
        })
    };

    deleteCard=(id) => {
            fetch(`${config.API_ENDPOINT}/api/cards/${id}`,{
            method: "delete",
            headers:{
                "content-type": "application/json"
            },
        })
        .then(data => {
        if(this.state.cards.length===0){
           this.deleteProject()
        }else{
           this.getCard()
        }
    })
    };

    render(){
    const card=this.state.cards[this.state.cardsOrder] || {}
    
    return(
     <div>
         <li>
         <ReactCardFlip isFlipped={this.state.flipCard===card.id} flipDirection="vertical">
         <p className="cardFlip"><button onClick={e=>this.handleFlipCard(card.id)}>Flip Me</button>

         {card.question}</p>
         <p className="cardFlip"><button onClick={e=>this.handleFlipCard()}>Flip Me</button>
         {card.answer}</p>
         </ReactCardFlip>
         <button onClick={e=>this.nextCard(card)} className="next-button">Next</button>
         </li> 
     </div>
    )
}
}
