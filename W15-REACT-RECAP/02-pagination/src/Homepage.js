import './App.css';
import {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from './components/Card'

import CardContainer from './components/CardContainer'

import {data} from './news-articles'

function App() {

  const [state, setState] = useState({
    items:[],
    skip: 0
  })

 
  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = () => {
    console.log("🚀 ~ skip AT START")
    const moreNews = data.filter((item, idx) => idx >= state.skip && idx < state.skip + 20)
    // console.log("🚀 ~ moreNews", moreNews)

    
    // setSkip(skip + 20)
    setState({items: [...state.items, ...moreNews], skip: state.skip + 20})

    // console.log("🚀 ~ skip AT END", skip)
  }
  
  
  console.log("🚀 ~ setNewsReceived", state.items.length, 'skip is', state.skip)
  return ( 

  <div className="main">

    {/* {
      newsReceived.map((item, idx) => <div key={idx}>{item.Heading}</div>) 
      } */}

    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>No more news articles to show</b>
        </p>
      }
    >
      {
      state.items.map((item, idx) => <div key={idx}>{item.Heading}</div>) 
      }
    </InfiniteScroll>

  </div>
  );
}

export default App;