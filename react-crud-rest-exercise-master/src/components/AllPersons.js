import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';


export default function AllPersons(props) {
  
  const { persons,editPerson,deletePerson} = props;

    var mappedtable=persons.map(x=>{
    return <tr key={x.id}><th>{x.age}</th><th>{x.name}</th><th>{x.gender}</th><th>{x.email}</th><td>
    <a href="xx" onClick={(e)=>{e.preventDefault();editPerson(x)}}>edit</a> / 
    <a href="xx" onClick={(e)=>{e.preventDefault();deletePerson(x.id)}}>delete</a>
    </td>
    </tr>
  })
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {mappedtable}
        </tbody>
      </table>
      
      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
