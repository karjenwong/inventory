const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");

const data = [
  {
    "uid": 1,
    "name": "final fantasy",
    "category": "Video Games",
    "qty": 10,
    "owner": "BestBuy"
  },
  {
    "uid": 2,
    "name": "magazine",
    "category": "Books",
    "qty": 13,
    "owner": "BestBuy"
  },
  {
    "uid": 3,
    "name": "guns",
    "category": "Weapons",
    "qty": 1,
    "owner": "Donald Trump"
  },
  {
    "uid": 4,
    "name": "dvds",
    "category": "Video",
    "qty": 2,
    "owner": "BestBuy"
  },
  {
    "uid": 5,
    "name": "coke",
    "category": "Drinks",
    "qty": 3,
    "owner": "BestBuy"
  }
 ]

app.use(bodyParser.json());
app.use(cors());

app.post("/addinventory",(req,res)=> {
  let newItem = req.body
  newItem.uid = data.length+1
  data.push(newItem)
  res.json({ "response": data })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});