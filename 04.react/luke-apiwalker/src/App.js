import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import { Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Form/>
        <Routes>
          <Route path="/:x/:y" element={<Display/>}/>
        </Routes>
      </header>
    </div>

  );
}

export default App;
