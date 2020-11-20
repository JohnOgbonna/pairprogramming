import {React, Component} from 'react'; 
import axios from 'axios'; 


class fightPage extends Component{ 
    state={ 
        fighters:[]
    }
      
        
    
    componentDidMount(){ 
        
       axios.get(`http://localhost:8080/${this.props.match.params.player1}`)
        .then(res=>{
           this.setState({fighters:[...res.data]})
        }) 
        .catch(alert('could not get player 1 info')) 
    
        axios.get(`http://localhost:8080/${this.props.match.params.player2}`)
        .then(res=>{
            this.setState({fighters:[...res.data]})
        }) 
        .catch(alert('could not get player 2 info'))
    }

    render(){ 
       
    
        return( 
            <div>
                <h1>player 1 is{this.state.fighters[0].name}</h1> 
                <h1>player 2 is{this.state.fighters[1].name}</h1> 
                <h1>fighting at {this.props.match.params.venue}</h1>
            </div>

        )
    }
} 
export default fightPage