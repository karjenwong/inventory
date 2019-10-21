import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Items from "./components/Items";
import AddInventory from "./components/AddInventory";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allinventory")
      .then(x => setData(x.data.response))
      .then(console.log("fetched data"));
  }, []);

  return (
    <div className="App">
      <AddInventory setData={setData} />
      <Items data={data} setData={setData}/>
    </div>
  );
}

export default App;
