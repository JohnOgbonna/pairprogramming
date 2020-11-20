import {React, Component} from 'react'; 
import axios from 'axios'; 
import Game from './game'


class fightPage extends Component{ 
    state={ 
        fighters:[],
        turn: 0
    } 

   
     
        
    
    componentDidMount(){ 
      let characters =[]  

       axios.get(`http://localhost:8080/${this.props.match.params.player1}`)
        .then(res=>{
          characters.push(res.data) 
        
        }) 
        .catch(error=>{
           alert('Could not get player 1 info')
            }
          )    
    
        axios.get(`http://localhost:8080/${this.props.match.params.player2}`)
        .then(res=>{
            characters.push(res.data)
            console.log(characters)
            this.setState({fighters:characters}) 
            console.log(this.state.fighters)
        }) 
        .catch(error=>{
            alert('Could not get player 2 info')
            }
          )     
    }

    render(){  
        console.log(this.state.fighters)
        console.log(this.state.fighters[0])
        const changeTurn = (turn)=>{ 
            if(turn===0){ 
                this.setState({turn:1})
            } 
            if(turn===1){ 
                this.setState({turn:0})
            } 
        } 
    
        return( 
            <Game
            turn ={this.state.turn} 
            change = {changeTurn} 
            players = {this.state.fighters}
            
            
            />
        )
    }
} 
export default fightPage