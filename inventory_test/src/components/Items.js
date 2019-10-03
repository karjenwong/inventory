import React from 'react';

function Items(test)  {
 return test.map(item=> (
  <div>
  <h2>{item.name}</h2>
    <p>{item.id}</p>
    <p>{item.category}</p>
    <p>{item.qty}</p>
    <p>{item.owner}</p>
</div>
 ))
  
}

export default Items;
