import logo from './logo.svg';
import './App.css';
import person, {males, females} from "./file2";
import file3, { Welcome, MultiWelcome, WelcomePerson } from "./file3";
function App() {
  let [firstname, email] = [person.firstName, person.email];
  const [en,to,tre,fire,fem,seks,syv] = [males[0],males[1],"kurt","Helle",females[0],females[1],"tina"];
  return (
    <div className="App">
      <p>Opgave 2</p>
      <p>{firstname}</p>
      <p>{email}</p>
      {console.log(en,to,fem,seks)}
      {console.log(en,to,tre,fire,fem,seks,syv)}

      <h2>EX3</h2>
      <MultiWelcome/>
      
    </div>
  );
}

export default App;
