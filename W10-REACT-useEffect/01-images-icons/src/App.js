import './App.css';
import {useState} from 'react'
import Button from './components/button'
import {Button2} from './components/button'

function App() {

  let [counter, setCounter] = useState(0)

  const handleClick = () =>{ 
    setCounter(counter += 1)
    console.log('Click me was pressed')}

  const handleLogin= () => console.log('Login pressed')

  return ( 

  <div className="main">
    Counter is {counter}
    <Button cb={handleClick} className='button' text='Click me'/>
    <Button2 cb={handleLogin} className='button' text='Login'/>
  </div>
  );
}

export default App;

function demo(a, b, c) {

}

demo(1, 2, 3)
demo("a", 'v', 'c')
