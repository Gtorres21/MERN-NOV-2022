import './App.css';
import Form from './components/Form';
import ListProducts from './components/ListProducts';
import ViewOne from './components/ViewOne';
import Main from './container/Main';
import { Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App" style={{backgroundColor: 'blanchedalmond'}}>
        <h1>Product Manager 💸</h1>
        {/* <Form/>
        <ListProducts/> */}
        <hr/>

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/product/:id" element={<ViewOne/>}/>
        </Routes>

    </div>
  );
}

export default App;
