import React from 'react';

function Items(test)  {
  return test.map(item=> {
    item.name = item.name.toUpperCase()
    return (
    <div>
      <h2>({item.uid}) {item.name}</h2>
        <p>Category: {item.category}</p>
        <p>Qty: {item.qty}</p>
        <p>Owner: {item.owner}</p>
    </div>
    )
  })  
}

export default Items;
