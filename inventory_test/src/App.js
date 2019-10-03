import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Items from './components/Items'

function App()  {
const [data, setData] = useState([{ "name": "Mario Party",
"category": "Video Games",
"qty": 10000,
"owner": "BestBuy"
}])

useEffect( ()=> {
  axios.post("http://localhost:8080/addinventory", 
    { "name": "Mario Party",
      "category": "Video Games",
      "qty": 10000,
      "owner": "BestBuy"
    }
  ).then(x=> setData(x.data.response))
  console.log('hi')
},[])



return (
  <div className="App">
    <h1>Inventory items</h1>
    {Items(data)}  
      
  </div>
)

  
  
}

export default App;
