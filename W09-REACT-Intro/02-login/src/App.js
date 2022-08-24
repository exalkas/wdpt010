import './App.css';
import Button from './components/button'
import Input from './components/input'

function App() {
  
  return ( // up to here is JS
  // from here this is JSX = JS + XML

  <div className="main">
    
    <Input text="user" style="danger"/>
    <Input text="pass"/>
    {/* <input onChange={(e) => console.log('User types in pass input', e.target.value) } type="text" placeholder="Type your password"/> */}

    <Button />
  </div>
  );
}

export default App;
