import logo from './logo.svg';
import './App.css';
import {PersonCard}  from './components/PersonCard';

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  hairColor: "Black"
}

const personA = {
  firstName: "John",
  lastName: "Smith",
  age: 88,
  hairColor: "Brown"
}

const personB = {
  firstName: "Millard",
  lastName: "Fillmore",
  age: 50,
  hairColor: "Brown"
}

const personC = {
  firstName: "Maria",
  lastName: "Smith",
  age: 62,
  hairColor: "Brown"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonCard personProp={person}/>
        <PersonCard personProp={personA}/>
        <PersonCard personProp={personB}/>
        <PersonCard personProp={personC}/>
      </header>
    </div>
  );
}

export default App;
