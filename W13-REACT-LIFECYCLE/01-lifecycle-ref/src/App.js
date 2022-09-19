import './App.css';
import {Link} from 'react-router-dom'
import {useEffect, useState, useRef} from 'react'
// import Header from './components/Header'
import Header from './components/Header'

function App() {


  useEffect(() => {
    console.log('Run for the first time only')

    return () => console.log('This component WILL BE UNMOUNTED')
  }, [])
  
  
  console.log("🚀 ~ before render")
  return (
    <div>
      Hello from home
    </div>
  );
}

export default App;
