import './App.css';
import Counter from "./components/Counter/Counter"
import Greeting from './components/Greeting/Greeting';

const person = {
  name: "Euralio",
}

function App() {
  return (
    <div className="App">
      <Counter className="Counter" />
      <Greeting person={person}/>
    </div>
  );
}



export default App;
