import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
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

let test = data.map(item => {
  return (<div>
      <h2>{item.name}</h2>
        <p>{item.id}</p>
        <p>{item.category}</p>
        <p>{item.qty}</p>
        <p>{item.owner}</p>
    </div>
  )
})


return (
  <div className="App">
    <h1>Inventory Test</h1>
    {test}  
      
  </div>
)

  
  
}

export default App;
