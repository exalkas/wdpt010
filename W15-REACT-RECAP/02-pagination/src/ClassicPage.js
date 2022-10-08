import './App.css';
import {useState, useEffect, useContext} from 'react'
import {print} from './utilities'
import {AppContext} from './Context'

const array = [
    () => console.log(1),
    () => console.log(2),
    () => console.log(3),
    () => console.log(4),
]

const data = {
    print: function () {
        console.log('hello from data')
    }
}

function App() {

  // const {alkis, state, setState} = useContext(AppContext)
  const {alkis, state, dispatch} = useContext(AppContext)


  useEffect(() => {

    print('hello from utilities')
    
    async function getData() {

        const response = data

        const response2 = array
        response.print()

        response2[0]()

        dispatch({type: 'add', payload: 1})

        console.log('alkis is ', alkis)
    }

    getData()
    
  }, [])

  return ( 

  <div className="main">



  </div>
  );
}

export default App;