import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from   'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
import Final from './components/Final';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Link to={"/"}>Reset</Link>
      <Link to ={"/home"}>Home</Link>
      {/* Parseint  */}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:word' element={<Word/>}/>
        <Route path='/:word/:wcolor/:bgcolor' element={<Final/>}/>
      </Routes>

      </header>
    </div>
  );
}

export default App;
