
function Items(items)  {
let items = data.map(item => (<div>
      <h2>{item.name}</h2>
        <p>{item.id}</p>
        <p>{item.category}</p>
        <p>{item.qty}</p>
        <p>{item.owner}</p>
    </div>
  )
)
return items
  
}

export default Items;
