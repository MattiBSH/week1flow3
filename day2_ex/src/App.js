import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Increment from './UpNDown';
import JokeTimer from './Joke';
import Members from './ListDemo';
function App() {

 return (
   <div>
     <Increment number={2} amount={5} />
     <JokeTimer/>
     <Members/>

   </div>
  );
}


export default App;
