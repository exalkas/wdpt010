import './App.css';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
// import Header from './components/Header'
import Header from './components/Header'
import Spinner from './components/Spinner';

function App() {

  const [showSpinner, setShowSpinner] = useState(false)

  return (
    <div>
      Hello from home
      <button onClick={() => setShowSpinner(!showSpinner)}>Spinner</button>

      {

        showSpinner ? <Spinner /> : null
      }
    </div>
  );
}

export default App;
