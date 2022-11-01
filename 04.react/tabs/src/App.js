import './App.css';
import Tabs from './components/Tabs.jsx';
import {useState} from 'react';

function App() {

  const [tabs, setTabs] = useState([
    {
      title: 'Tab 1', 
      content: "Tab 1 content is showing here"
    }, 
    {
      title: 'Tab 2', 
      content: "Tab 2 content is showing here"
    }, 
    {
      title: 'Tab 3',
      content: "Tab 3 content is showing here"
    }

  ])



  return (
    <div className="App">
        <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
