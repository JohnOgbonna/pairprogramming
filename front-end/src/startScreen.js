
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'; 
import {React, Component} from 'react'
import './startScreen.scss';




class startScreen extends Component { 
  state ={ 
    player1: '', 
    player2: '', 
    venue: '', 
    ready: 'notready'
  } 

  setPlayer1 = (char) =>{ 
    this.setState({player1: char}); 
    console.log(this.state.player1);
  } 
  setPlayer2 = (char) =>{ 
    this.setState({player2: char}); 
    console.log(this.state.player2);
  } 
  setVenue = (place) =>{ 
    this.setState({venue: place}); 
    console.log(this.state.venue);
  } 
  componentDidUpdate(){ 
    if (this.state.player1 && this.state.player2 && this.state.venue && this.state.ready!=='ready'){ 
      this.setState({ready:'ready'}); 
     
    } 
    console.log(this.state.ready)
  }


  render(){ 
  return (  
  
     
    <div>
    <div className = "select">
    <div className="pdivider">
      <div className="player1select">
        <h1>Player 1 Select Character</h1> 
        <button className='goku' onClick ={()=>this.setPlayer1('goku') } >Goku</button> 
        <button className='vegeta' onClick ={()=>this.setPlayer1('vegeta')} >Vegeta</button>
        <button className='cell' onClick ={()=>this.setPlayer1('cell')} >Cell</button>
        <button className='freeza' onClick ={()=>this.setPlayer1('freeza')}>Freeza</button>
      </div>   

      <div className="player2select">
        <h1>Player 2 Select Character</h1> 
        <button className='goku' onClick ={()=>this.setPlayer2('goku') } >Goku</button> 
        <button className='vegeta' onClick ={()=>this.setPlayer2('vegeta')} >Vegeta</button>
        <button className='cell' onClick ={()=>this.setPlayer2('cell')} >Cell</button>
        <button className='freeza' onClick ={()=>this.setPlayer2('freeza')}>Freeza</button>
      </div>  
      </div>
      <div className="venueselect"> 
        <h1 className="venueheader">Select Battleground!</h1>
        <div className="buttonmover">
        <button className="namek"  onClick={()=>{this.setVenue('namek')}}>Namek</button> 
        <button className="kamehouse" onClick={()=>{this.setVenue('kamehouse')}}>Kamehouse</button>  
        <button className="cellgames"  onClick={()=>{this.setVenue('cellgames')}}>Cellgames</button> 
      </div>
</div>
    </div> 

    <div className ="background-title"> 

     <Link to= {`fight/${this.state.player1}/${this.state.player2}/${this.state.venue}`}><div className ={this.state.ready} id="battlefight">BEGIN!</div></Link>
    </div>
    </div>
  
    
  );
} 
}

export default startScreen;
