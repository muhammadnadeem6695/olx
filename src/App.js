<<<<<<< HEAD
import './App.css';
import Router from './config/router';

function App() {

  return ( <div>

  <Router/>
    
=======
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

>>>>>>> d7c2a723770ed9e72b58da23d5d2a4dfde19a9de
  </div>
    
  );
}

export default App;
