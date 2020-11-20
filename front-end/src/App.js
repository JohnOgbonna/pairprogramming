import fightPage from "./pages/fightPage"; 
import startScreen from "./startScreen"; 
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'; 
import {React, Component} from 'react'

class App extends Component{ 
    render(){
      return( 
        <Router> 
            <Switch> 
              <Route path='/' exact component = {startScreen} /> 
              <Route path ='/fight/:player1/:player2/:venue' component ={fightPage}/> 
            </Switch>  
      </Router> 
      )
    }
  }
  export default App;