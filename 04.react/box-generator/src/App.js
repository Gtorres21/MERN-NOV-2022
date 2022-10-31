import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import React, { useState } from 'react';



function App() {

  const [boxes, setBoxes] = useState([
    {
        backgroundColor: 'Blue',
        width: '100px',
        height: '100px',
    },
    {
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
    },
    {
        backgroundColor: 'purple',
        width: '100px',
        height: '100px',
    }
])

const addToState = (newBoxObj) => {
  setBoxes([...boxes, newBoxObj])
}

  return (
    <div className="App">
      <Form addToState={addToState}/>
      <Display boxes={boxes}/>
    </div>
  );
}

export default App;
