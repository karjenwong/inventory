import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Addinventory({ setData }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    qty: 0,
    owner: ""
  });

  const fill = v => {
    form[v.target.name] = v.target.value;
    if (v.target.name === "qty") form["qty"] = Number(form["qty"]);
    setForm({ ...form });
  };

  const add = () => {
    let valid = Object.keys(form).every(x => form[x]);
    if (valid) {
      axios
        .post("http://localhost:8080/addinventory", form)
        .then(x => setData(x.data.response));
    } else console.log("sth is wrong");
  };

  return (
    <div>
      <h1>Add Inventory Form</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" onChange={fill} />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="category" name="category" placeholder="Category" onChange={fill} />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="qty" name="qty" placeholder="Enter quantity" onChange={fill} />
        </Form.Group> 
        <Form.Group controlId="formOwner">
          <Form.Label>Owner</Form.Label>
          <Form.Control type="owner" name="owner"placeholder="Enter Owner" onChange={fill} />
        </Form.Group>        
        <Button variant="primary" type="button" onClick={add}>
          Submit
        </Button>
        <p>{form.name},{form.category},{form.qty},{form.owner}</p>
      </Form>
    </div>
  );
}

export default Addinventory;
