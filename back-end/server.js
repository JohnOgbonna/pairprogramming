const express = require('express'); 
const app = express();  
const port = 8080; 
const cors = require ('cors'); 
app.use(express.json()); 
app.use(cors());

let goku ={ 
    attack: 1500, 
    def: 1000, 
    endurance:1200, 
    name: 'goku',
    id: 0
} 

let vegeta ={ 
    attack: 1200,
    def: 1250, 
    endurance: 1100,
    name: 'vegeta', 
    id: 1
} 

let cell={ 
    attack: 1800,
    def: 500, 
    endurance: 850,
    name: 'cell', 
    id: 2
} 

let freeza={ 
    attack: 1300, 
    def: 1000, 
    endurance: 1500,
    name: 'cell', 
    id: 3
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