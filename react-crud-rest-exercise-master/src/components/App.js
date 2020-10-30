import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    apiFacade.getPersons(setPersons);
  },[]);

  const storeAddEditPerson = (person) => {
    //Call this from the AddEditPerson control with the person to Add or Edit and Add/Edit via the apiFacade
    apiFacade.addEditPerson(person);
    
    apiFacade.getPersons(setPersons);
  }

  const deletePerson = (id) => {
    //Call this from the AllPerson control with the id for the person to delete
    apiFacade.deletePerson(id);
    apiFacade.getPersons(setPersons);
  }

  const editPerson = (person) => {
    setPersonToAddEdit(person);
    apiFacade.getPersons(setPersons);

  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            addEditPerson={storeAddEditPerson}
            personToAddsEdit={personToAddEdit}
            apiFacade={apiFacade}
            setPersons={setPersons}
            key={personToAddEdit.id}
            
          />
        </div>
      </div>
    </div>
  );
}
export default App;
