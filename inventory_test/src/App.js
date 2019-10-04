import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Items from "./components/Items";

function App() {
  const [data, setData] = useState([
    {
      name: "Mario Party",
      category: "Video Games",
      qty: 10000,
      owner: "BestBuy"
    }
  ]);

  const [form, setForm] = useState({
    name: "rare",
    category: "secret",
    qty: 1,
    owner: "kyle"
  });

  useEffect(() => {
    axios
      .post("http://localhost:8080/addinventory", {
        name: "Mario Party",
        category: "Video Games",
        qty: 10000,
        owner: "BestBuy"
      })
      .then(x => setData(x.data.response))
      .then(console.log("fetched data"));
  }, []);

  const fill = v => {
    form[v.target.name] = v.target.value;
    setForm({ ...form });
  };

  let add =()=> {
    console.log(form)
    axios
      .post("http://localhost:8080/addinventory", form)
      .then(x => setData(x.data.response))
  }
  return (
    <div className="App">
      <div>
        <h1>Add Inventory Form</h1>
        <form>
          <div>
            <label>Name </label>
            <input type="text" name="name" onChange={fill} />
          </div>
          <div>
            <label>Category </label>
            <input type="text" name="category" onChange={fill} />
          </div>

          <div>
            <label>Quantity </label>
            <input type="text" name="qty" onChange={fill} />
          </div>
          <div>
            <label>Owner </label>
            <input type="text" name="owner" onChange={fill} />
          </div>
          <button type="button" onClick={add}>Submit</button>
        </form>
        <h2>Default Inventory stuff</h2>
        <div>
          {form.name},{form.category},{form.qty},{form.owner}
        </div>
      </div>
      <div>
        <h1>Display Inventory</h1>
        {Items(data)}
      </div>
    </div>
  );
}

export default App;
