import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pokemon/>
      </header>
    </div>
  );
}

export default App;
