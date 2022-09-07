import { useEffect, useState } from "react"
import './scss/main.scss'
import './App.css'

import Search from './components/Search'

export default function Weather() {


    const [weather, setWeather] = useState({})

    const [searchText, setSearchText] = useState('')

    useEffect( () => {

        async function getData() {

            if (searchText.length < 4) return
            try {
                
                const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${searchText}&appid=`)
    
                const data = await response.json()
    
                console.log('data', data.list[0])

                setWeather(data.list[0])
            } catch (error) {
                console.log('ERROR:', error.message)
            }

        }

        getData()
    }, [searchText])

    const handleSearchChange = e => setSearchText(e.target.value)

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked')
    }

    return <div>

        {/* {       
            weather.main && <div>
                
            Weather for {weather.name}
            <p>Humidity: {weather.main.humidity}</p>

            {
                Object.entries(weather.main).map((item, idx)=> <div key={idx}>

                    {item[0]} : {item[1]}
                </div>)
            }
            </div>
        } */}

        <Search value={searchText} onChange={handleSearchChange} onClick={handleClick}/>

        {
            // object.main = undefined
            // wather => undefined
            // undefined.main => error
            weather?.main ? <div className='main'>
                Weather for {weather.name}
                <p className='humidity'>Humidity: {weather.main.humidity}</p>

                {
                    Object.entries(weather.main).map((item, idx)=> <div key={idx}>

                        {item[0]} : {item[1]}
                    </div>)
                }
            </div>
            : 'Loading...'
        }
    </div>
}