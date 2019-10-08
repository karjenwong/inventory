import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Items({ data }) {
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
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h1>All Inventory List</h1>
      {list}
    </>
  );
}

export default Items;
