import {React, Component} from 'react'; 

const Game= props =>{ 
if(props.winner){    

    if(props.turn==0){
    return( 
        <div className="battle"> 
            <h1 className="choose/respond">PLAYER 1 CHOOSE</h1>
            <div className='player1'>
                <h1 className ='player header'>{props.players[0].name}</h1>
                <div className ={`${props.players[0].name}Attack`}></div> 
                <h2 className='health'>HEALTH: {props.players[0].hp/props.players[0].maxhp*100}%</h2>
                <h2 className='endurance'>STAMINA: {props.players[0].endurance/props.players[0].maxendurance*100}%</h2>
                <button className='attackButton'onClick ={() => props.onesChoice('attack')}>ATTACK</button> 
                <button className='blockButton'onClick ={() => props.onesChoice('block')}>BLOCK</button> 
                <button className='chargeButton'onClick ={() => props.onesChoice('charge')}>POWER UP</button>
            </div> 

              <div className='player2'>
                <h1 className ='playerheader'>{props.players[1].name}</h1> 
                <div classname ={`${props.players[1].name}Attack`}></div> 
                <h2 className='health'>HEALTH: {props.players[1].hp/props.players[1].maxhp*100}%</h2>
                <h2 className='endurance'>STAMINA: {props.players[1].endurance/props.players[1].maxendurance*100}%</h2>
                <div classname ={`${props.players[1].name}Attack`}></div> 
            </div>    
        
        </div>
    )
    
    } 

    if(props.turn==1){
        return( 
            
            <div className="battle"> 
            <h1 className="choose/respond">PLAYER 2 RESPOND</h1>
                <div className='player1'>
                    <h1 className ='player header'>{props.players[0].name}</h1>
                    <div classname ={`${props.players[0].name}Attack`}></div> 
                    <h2 className='health'>HEALTH: {props.players[0].hp/props.players[0].maxhp*100}%</h2>
                    <h2 className='endurance'>STAMINA: {props.players[0].endurance/props.players[0].maxendurance*100}%</h2>
                    
                </div> 
    
                  <div className='player2'>
                    <h1 className ='player header'>{props.players[1].name}</h1>
                    <div classname ={`${props.players[1].name}Attack`}></div> 
                    <h2 className='health'>HEALTH: {props.players[1].hp/props.players[1].maxhp*100}%</h2>
                    <h2 className='endurance'>STAMINA: {props.players[1].endurance/props.players[1].maxendurance*100}%</h2>
                    <button className='attackButton'onClick ={() => props.twosChoice('attack')}>ATTACK</button> 
                    <button className='blockButton'onClick ={() => props.twosChoice('block')}>BLOCK</button> 
                    <button className='chargeButton'onClick ={() => props.twosChoice('charge')}>POWER UP</button>
                </div>    
            
            </div>
    
        ) 
        } 
        if(props.turn==2){
            return( 
                <div className="battle"> 
                <h1 className="choose/respond">PLAYER 2 CHOOSE</h1>
                    <div className='player1'>
                        <h1 className ='player header'>{props.players[0].name}</h1>
                        <div classname ={`${props.players[0].name}Attack`}></div> 
                        <h2 className='health'>HEALTH: {props.players[0].hp/props.players[0].maxhp*100}%</h2>
                        <h2 className='endurance'>STAMINA: {props.players[0].endurance/props.players[0].maxendurance*100}%</h2>
                        
                    </div> 
        
                      <div className='player2'>
                        <h1 className ='player header'>{props.players[1].name}</h1>
                        <div classname ={`${props.players[1].name}Attack`}></div> 
                        <h2 className='health'>HEALTH: {props.players[1].hp/props.players[1].maxhp*100}%</h2>
                        <h2 className='endurance'>STAMINA: {props.players[1].endurance/props.players[1].maxendurance*100}%</h2>
                        <button className='attackButton'onClick ={() => props.twosChoice('attack')}>ATTACK</button> 
                        <button className='blockButton'onClick ={() => props.twosChoice('block')}>BLOCK</button> 
                        <button className='chargeButton'onClick ={() => props.twosChoice('charge')}>POWER UP</button>
                    </div>    
                
                </div>
        
            ) 
            } 
            if(props.turn==3){
                return( 
                    <div className="battle"> 
                    <h1 className="choose/respond">PLAYER 1 RESPOND</h1>
                        <div className='player1'>
                            <h1 className ='player header'>{props.players[0].name}</h1>
                            <div classname ={`${props.players[0].name}Attack`}></div> 
                            <h2 className='health'>HEALTH: {props.players[0].hp/props.players[0].maxhp*100}%</h2>
                            <h2 className='endurance'>STAMINA: {props.players[0].endurance/props.players[0].maxendurance*100}%</h2>
                            <button className='attackButton'onClick ={() => props.onesChoice('attack')}>ATTACK</button> 
                            <button className='blockButton'onClick ={() => props.onesChoice('block')}>BLOCK</button> 
                            <button className='chargeButton'onClick ={() => props.onesChoice('charge')}>POWER UP</button>
                        </div> 
            
                          <div className='player2'>
                            <h1 className ='player header'>{props.players[1].name}</h1>
                            <div classname ={`${props.players[1].name}Attack`}></div>  
                            <h2 className='health'>HEALTH: {props.players[1].hp/props.players[1].maxhp*100}%</h2>
                             <h2 className='endurance'>STAMINA: {props.players[1].endurance/props.players[1].maxendurance*100}%</h2>
                        </div>    
                    
                    </div>
            
                ) 
            } 
        } 
        else if (props.winner != 'tie'){
            return(  
                <div className="tiescreen"> 
                    <h1>ITS A TIE!</h1> 
                    <div classname ={`${props.players[0].name}Attack`}></div> 
                    <div classname ={`${props.players[1].name}Attack`}></div> 
                </div>
                
            )
        } 
        else{ 
            return( 
                <div className = "winscreen"> 
                <h1 className={`${props.winner}win`}>{props.winner.toUpperCase()} WINS</h1>
                </div>
            )
        }
    }


export default Game