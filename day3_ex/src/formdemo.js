import React, {useState} from "react";
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
    const value =event.target.value;
    setName(value);
  }
  function handleSubmit(event) {
      event.preventDefault();
      alert(name);
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
