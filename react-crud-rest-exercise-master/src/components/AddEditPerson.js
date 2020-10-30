import React, { useEffect, useState} from "react";

export default function AddEditPerson(props) {
  console.log(props.newPerson)
  const [person, setPerson] = useState({ ...props.newPerson });

  useEffect(() => {setPerson(props.newPerson)},[props.newPerson])
 
  const handleChange = (evt) => {
    const target =evt.target;
    const value=target.value;
    const prop=target.id;
    const person1={...person,[prop]:value}
    setPerson(person1);
  }
/*  const update=(person)=>{
    setPerson(props.personToAddEdit)
        props.apiFacade.addEditPerson(person);
  }*/
  const handleSubmit = (evt) => {
      evt.preventDefault();
      /*if(person.id){
        update(person);
      }else{*/
      props.addEditPerson(person);
      //props.apiFacade.getPersons(props.setPersons);
      //}
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={person.id}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
            onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
            onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
            onChange={handleChange}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
