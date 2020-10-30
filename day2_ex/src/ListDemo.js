import React, {useState} from "react";
 
function MemberTable( props ) {
    var membertable=props.members.map(x=>{
    return <tr key={x.name}><th>{x.name}</th><th>{x.age}</th></tr>
    })
  return (
    <table>
      <thead></thead>
  <tbody>{membertable}</tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}
 
export default function MembersApp() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
