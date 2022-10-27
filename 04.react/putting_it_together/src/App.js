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


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonCard person = {nameOne}/>
        <PersonCard person = {nameTwo}/>
      </header>
    </div>
  );
}

export default App;
