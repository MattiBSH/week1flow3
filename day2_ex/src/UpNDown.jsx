import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Increment(n) {
 // Declare a new state variable, which we'll call "count"
 const [count, setCount] = useState(n.number);
 function save(){
    localStorage.setItem("count", count);
    localStorage.getItem("count") //Returns value as a string
 }
 return (
   <div align="center">
     <h2>Opgave 1</h2>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + n.amount)}>
       Up
     </button>
     <button onClick={() => setCount(count - n.amount)}>
       Down
     </button>
     <button onClick={save}>Save</button>
   </div>
  );
}
    

export default Increment;