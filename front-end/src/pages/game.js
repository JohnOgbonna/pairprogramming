import {React, Component} from 'react'; 

const Game= props =>{ 

    if(props.turn==0){
    return( 
        <div className='player 1'>
            <h1 className ='player header'>{props.players[0].name}</h1>
            <div classname ={`${props.players[0].name}Attack`}></div> 
            <button className='attackButton'></button>
        
        
        </div>

    ) 
    }
} 

export default Game