import React from "react";
import Card from "react-bootstrap/Card";
import ItemModal from "./ItemModal"

function Items({ data, setData }) {
  let list = data.map(item => {
    return (
      <Card style={{ width: "18rem" }} key={item.uid}>
        <Card.Body>
          <Card.Title>
            {item.uid} {item.name.toUpperCase()}
          </Card.Title>
          <Card.Text>Category: {item.category}</Card.Text>
          <Card.Text>Qty: {item.qty}</Card.Text>
          <Card.Text>Owner: {item.owner}</Card.Text>
          <ItemModal item = {item} setData={setData}/>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="inventory_container">
      <h1>All Inventory List</h1>
      <div className="inventoryList">{list}</div>
    </div>
  );
}

export default Items;
