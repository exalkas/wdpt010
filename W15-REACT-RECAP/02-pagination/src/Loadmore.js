import './App.css';
import {useState, useEffect} from 'react'


import {data} from './news-articles'

function App() {

  const [state, setState] = useState({
    items:[],
    skip: 0,
    completed: false
  })

 
  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = () => {
    
      console.log("🚀 ~ data.length", data.length, state.skip)


    const moreNews = data.filter((item, idx) => idx >= state.skip && idx < state.skip + 20)
    // console.log("🚀 ~ moreNews", moreNews)

    
    // setSkip(skip + 20)
    setState({...state, items: [...state.items, ...moreNews], skip: state.skip + 20, completed: state.skip >= data.length})
    
  }
  
  
  console.log("🚀 ~ setNewsReceived", state.items.length, 'skip is', state.skip)
  return ( 

  <div className="main">

    {
      state.items.map((item, idx) => <div key={idx}>{item.Heading}</div>)
     }

    {
     state.skip < data.length ?   
        <button onClick={fetchData}>Load more</button>
    : 'No more data'
    }
   
  </div>
  );
}

export default App;