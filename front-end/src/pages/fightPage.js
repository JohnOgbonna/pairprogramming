import {React, Component} from 'react'; 
import axios from 'axios'; 
import Game from './game'


class fightPage extends Component{ 
    state={ 
        fighters:[],
        turn: 0, 
        onechoice: '', 
        twochoice: '', 

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
    componentDidUpdate(prevProps, prevState){ 
        const compare = (oneschoice, twoschoice) =>{ 
        
            let playerArray = [...this.state.fighters]
            //player 1 attacks
            if(oneschoice==='attack'){ 
                 playerArray[0].endurance-=350 //reduce p1 endurance b/c attack
                if(twoschoice ==='block'){ 
                    //attack does 100 base damage, multiplied by (attack stat)/(defense stat) 
                    //Block option will decrease base attack by a factor of (100/defense stat *10)
                   playerArray[1].hp = playerArray[1].hp-(10*100*(100/playerArray[1].def)*(playerArray[0].attack*2)/(playerArray[1].def))
                } 
                else{ 
                    
                     //attack does 100 base damage, multiplied by (attack stat)/(defense stat) 
                   playerArray[1].hp = playerArray[1].hp-(100*(playerArray[0].attack*2)/(playerArray[1].def))
                }
            } 
            
            //player 2 attacks
            if(twoschoice==='attack'){ 
                 playerArray[1].endurance -= 350 //reduce p2 endurance b/c attack
                if(oneschoice ==='block'){ 
                    //attack does 100 base damage, multiplied by (attack stat)/(defense stat) 
                    //Block option will decrease base attack by a factor of (100/defense stat *10)
                   playerArray[0].hp = playerArray[0].hp-(10*100*(100/playerArray[0].def)*(playerArray[1].attack*2)/(playerArray[0].def))
                } 
    
                else{ 
                     //attack does 100 base damage, multiplied by (attack stat)/(defense stat) 
                    playerArray[0].hp = playerArray[0].hp-(100*(playerArray[1].attack*2)/(playerArray[0].def))
                }
            } 
            
            if(oneschoice==='charge'){ 
                //charge up option adds 300 endurance 
                if((playerArray[0].endurance + 300) > playerArray[0].maxendurance){ 
                    playerArray[0].endurance=playerArray[0].maxendurance
                }
                else{
                playerArray[0].endurance += 300; 
                }
            } 
           
            if(twoschoice==='charge'){ 
                //charge up option adds 300 endurance 
                if((playerArray[1].endurance + 300 )> playerArray[1].maxendurance){ 
                    playerArray[1].endurance=playerArray[1].maxendurance
                }
                else{
                playerArray[1].endurance += 300; 
                }
            } 
            if(this.state.turn===1){
            this.setState({
                fighters: playerArray, 
                turn: 2, 
                onechoice: '',
                twochoice: ''
            })               
            }  
            if(this.state.turn===3){
                this.setState({
                    fighters: playerArray, 
                    turn: 0,
                    onechoice: '',
                    twochoice: ''
                })               
                } 
        }
       
            if(this.state.turn<4 && this.state.fighters[0].hp >0 && this.state.fighters[1] <= 0){ 
                this.setState({turn: 4})
            } 
            
            if(this.state.turn < 4 && this.state.fighters[0].hp <= 0 && this.state.fighters[1] > 0){ 
                this.setState({turn: 5})
            } 

            if(this.state.turn===0 && this.state.onechoice && !this.state.twochoice){ 
                this.setState({turn:1})
            } 
            if(this.state.turn===1 && this.state.twochoice&& this.state.onechoice){  
                compare(this.state.onechoice, this.state.twochoice) 
            } 
            if(this.state.turn===2 && this.state.twochoice && !this.state.onechoice){ 
                this.setState({turn:3})
            } 
            if(this.state.turn===3 && this.state.onechoice && this.state.twochoice){ 
                compare(this.state.onechoice, this.state.twochoice) 
            }
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
        const onesChoice = (choice)=>{ 
            if(choice=='attack' && this.state.fighters[0].endurance < 350){ 
                alert('CANNOT ATTACK! STAMINA TOO LOW! CHARGE UP OR BLOCK ENEMYS ATTACK')
            } 
            else if(choice==='charge' && this.state.fighters[0].endurance === this.state.fighters[0].maxendurance){ 
                alert('YOU ARE AT FULL POWER, ATTACK THE ENEMY OR BLOCK THEIR ATTACK!')
            }
            else{
            this.setState({onechoice:choice }) 
            }
        } 

        const twosChoice = (choice)=>{ 
            if(choice==='attack' && this.state.fighters[1].endurance < 350){ 
                alert('CANNOT ATTACK! STAMINA TOO LOW! CHARGE UP OR BLOCK ENEMYS ATTACK')
            } 
            else if(choice==='charge' && this.state.fighters[1].endurance === this.state.fighters[1].maxendurance){ 
                alert('YOU ARE AT FULL POWER, ATTACK THE ENEMY OR BLOCK THEIR ATTACK!')
            }
            else{
            this.setState({twochoice:choice }) 
            }
        }
    
        return(
            
             this.state.fighters.length >0 &&   
            <Game
            turn ={this.state.turn} 
            players = {this.state.fighters}
            onesChoice ={onesChoice} 
            twosChoice ={twosChoice}
            
            /> 
            
        )
    }
} 
export default fightPage