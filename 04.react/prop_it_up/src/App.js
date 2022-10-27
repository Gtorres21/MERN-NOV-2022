import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const nameOne = {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  }

  const nameTwo = {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  }

  const nameThree = {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  }

  const nameFour = {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonCard person = {nameOne}/>
        <PersonCard person = {nameTwo}/>
        <PersonCard person = {nameThree}/>
        <PersonCard person = {nameFour}/>
      </header>
    </div>
  );
}

export default App;
