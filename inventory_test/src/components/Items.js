import React from "react";

function Items({ data }) {
  let list = data.map(item => {
    return (
      <div key={item.uid}>
        <h2>
          ({item.uid}) {item.name.toUpperCase()}
        </h2>
        <p>Category: {item.category}</p>
        <p>Qty: {item.qty}</p>
        <p>Owner: {item.owner}</p>
      </div>
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
