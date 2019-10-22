import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios"

function ItemModal({ item, setData }) {
  const [form, setForm] = useState({
    uid: item.uid,
    name: item.name,
    category: item.category,
    qty: item.qty,
    owner: item.owner
  });

  const fill = v => {
    form[v.target.name] = v.target.value;
    if (v.target.name === "qty") form["qty"] = Number(form["qty"]);
    setForm({ ...form });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = () => {
    let valid = Object.keys(form).every(x => form[x]);
    if (valid) {
      axios
        .post("http://localhost:8080/editinventory", form)
        .then(x => setData(x.data.response));
    } else console.log("sth is wrong");
  };

  return (
    <div className="modalContainer">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing for ID #{item.uid}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Name: {item.name}</h4>
            <input
              type="text"
              name="name"
              placeholder={item.name}
              onChange={fill}
            />
          </div>
          <div>
            <h4>Category: {item.category}</h4>
            <input
              type="text"
              name="category"
              placeholder={item.category}
              onChange={fill}
            />
          </div>
          <div>
            <h4>Quantity: {item.qty}</h4>
            <input
              type="number"
              name="qty"
              placeholder={item.qty}
              onChange={fill}
            />
          </div>
          <div>
            <h4>Owner: {item.owner}</h4>
            <input
              type="text"
              name="owner"
              placeholder={item.owner}
              onChange={fill}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            testing
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemModal;
