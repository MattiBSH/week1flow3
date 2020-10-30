import './App.css';
import FormDemo from "./formdemo";
import ReservationForm from "./FormDemoMultiple";
import Persons from './persons';
function App() {
  return (
    <div className="App">
      <h1>3 Dag</h1>
      <FormDemo/>
      <br/><br/>
      <ReservationForm/>
      <br/>
      <Persons/>
    </div>
  );
}

export default App;
