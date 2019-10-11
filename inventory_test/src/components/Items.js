import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Items({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
          
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
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
