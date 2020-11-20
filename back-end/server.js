const express = require('express'); 
const app = express();  
const port = 8080; 
const cors = require ('cors'); 
app.use(express.json()); 
app.use(cors());

let goku ={ 
    attack: 1500, 
    def: 1000, 
    endurance:1250, 
    name: 'goku',
    id: 0, 
    hp: 1000,
    maxhp:1000, 
    maxendurance: 1250
} 

let vegeta ={ 
    attack: 1175,
    def: 1250, 
    endurance: 1110,
    name: 'vegeta', 
    id: 1,
    hp:1150,
    maxhp:1150, 
    maxendurance: 1110
} 

let cell={ 
    attack: 2000,
    def: 700, 
    endurance: 850,
    name: 'cell', 
    id: 2,
    hp: 950,
    maxhp: 950, 
    maxendurance: 850
} 

let freeza={ 
    attack: 1300, 
    def: 1000, 
    endurance: 1350,
    name: 'freeza', 
    id: 3,
    hp: 1000,
    maxhp:1000, 
    maxendurance: 1500
} 

app.get('/goku', (req, res) => { 
    res.send(goku); 
}); 

app.get('/vegeta', (req, res) => { 
    res.send(vegeta); 
}); 

app.get('/cell', (req, res) => { 
    res.send(cell); 
}); 

app.get('/freeza', (req, res) => { 
    res.send(freeza); 
}); 

app.listen(port, ()=>{ 
    
    console.log(`listening on port ${port}`) 
    
});  