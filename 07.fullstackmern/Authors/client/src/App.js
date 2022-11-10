import './App.css';
import {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Display from './components/Display';
import Create from './components/Create';
import Edit from './components/Edit';



function App() {

  const [authors, setAuthors] = useState([])

  return (
    <div className="App">
      <h1>Favorite Authors ༼ つ ◕_◕ ༽つ </h1>
      {/* Theater Stage */}
      <Routes>
        {/* Display All */}
        <Route path='/' element={<Display authors={authors} setAuthors={setAuthors}/>}  />

        {/* Create */}
        <Route path='/new' element={<Create/>}/>

        {/* Edit */}
        <Route path='/edit/:id' element={<Edit/>}/>

        {/* REDIRECT */}
        <Route path='*' element={<Navigate to="/" replace/>}/>
      </Routes>

    </div>
  );
}

export default App;
