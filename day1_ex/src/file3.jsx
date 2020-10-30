import React from 'react';
import ReactDOM from 'react-dom';
import person, {persons} from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]}/>
        <WelcomePerson person={persons[1]}/>
        <WelcomePerson person={persons[2]}/>
        {persons.map((person)=><WelcomePerson person={person}/> ) }
      </div>
    );
  }
  
 export function WelcomePerson(probs){
     return(
         <div>
         <p> Welcome {probs.person.firstName} </p>
           <p> {probs.person.lastName} </p> 
           <p>  {probs.person.email}  </p>
           </div>
     )
 }

  