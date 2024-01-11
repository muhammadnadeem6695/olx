import {useState} from 'react'
import './App.css';
import Router from './config/router';
import Dashboard from './views/Dashboard/Dashboard';
import Header from './views/Header/Header';
import Contact from './views/Contact/Contact';

function App() {
const [screen , setScreen] = useState('Dashboard')

// const change = () => {
//   setScreen()
// }


  return ( <div>

    <Header/>

  </div>
    
  );
}

export default App;
