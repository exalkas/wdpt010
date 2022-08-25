import './App.css';
import {useState} from 'react'

function App() {

  let [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(showModal = true)
    console.log('button pressed');
  }

  const handleClose = () => {

    setShowModal(showModal = false)
  }

  return ( 

  <div className="main">
    
    {
      showModal === true ? 
      
      <div className="modal">
        Hello from modal
        <button onClick={handleClose}>Close</button>
      </div> 
      
      : null
    }

    <button onClick={handleClick}>Show</button>
  </div>
  );
}

export default App;
