import React, {useState}from "react";
import axios from "axios";
function Form({setData}) {
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
        .then(x=> setData(x.data.response))
      console.log("pass");
    } else {
      console.log("sth is wrong", form);
    }
  };

  return (
    <div>
      <h1>Add Inventory Form</h1>
      <form>
        <div>
          <label>Name </label>
          <input type="text" name="name" onChange={fill} />
        </div>
        <div>
          <label>Category </label>
          <input type="text" name="category" onChange={fill} />
        </div>

        <div>
          <label>Quantity </label>
          <input type="text" name="qty" onChange={fill} />
        </div>
        <div>
          <label>Owner </label>
          <input type="text" name="owner" onChange={fill} />
        </div>
        <button type="button" onClick={add}>
          Submit
        </button>
      </form>
      <h2>Default Inventory stuff</h2>
      <div>
        {form.name},{form.category},{form.qty},{form.owner}
      </div>
    </div>
  );
}

export default Form;
