import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  /**
   * return some html
   * handle some events
   * handle side Effects
   * 
   * side Effect: 
   * anything that has nothing to do with the returned html
   * 
   * SYNTAX:
   * useEffect(function, dependencies)
   * 
   * Dependencies:
   * 
   * it's an array. 
   * when is empty the useEffect will be executed the first time the component renders
   * when the dependency array is missing then it will run ON EVERY STATE CHANGE
   * when in the dependency are some variables (state) then it will run on their change and at FIRST RENDER
   */

  let [counter, setCounter] = useState(0)
  let [total, setTotal] = useState(0)

  useEffect(() => {

    // setCounter(counter += 1)
    setTotal(total += counter)
    console.log('Hello from useEffect')
  }, [counter])

  console.log('Before Render: Counter', counter)
  return ( 

  <div className="main">
    <button onClick={() => setCounter( counter += 1)}>Click me</button>
    Total is {total}
  </div>
  );
}

export default App;