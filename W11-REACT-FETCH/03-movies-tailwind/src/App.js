import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header'

function App() {

  const [searchText, setSearchText] = useState('')

  const [movies, setMovies] = useState([])

  const handleClick = async () => {
    
    if (searchText.length < 1) {
      alert('You need to type somthing')
      return;
    }

    try {
      
      const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key==${searchText}`)
      
      const data = await result.json()
      console.log("🚀 ~ data", data)

      setMovies(data.results)
      
    } catch (error) {
      
    }
  
  }

  return (
    <div>
      <Header 
        value={searchText}  
        onClick={handleClick}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className='flex flex-wrap gap-[10px] p-[40px]'>
      {
        movies.map((item, idx) => <div key={idx} className='flex flex-col items-center justify-center'> 
          {item.title}
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=''/> 
        </div>)
      }
      </div>
    </div>
  );
}

export default App;
