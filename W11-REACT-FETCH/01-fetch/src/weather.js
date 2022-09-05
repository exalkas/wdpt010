import { useEffect, useState } from "react"

export default function Weather() {


    const [weather, setWeather] = useState({})

    useEffect( () => {

        async function getData() {

            try {
                
                const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=London,,GB&appid=')
    
                const data = await response.json()
    
                console.log('data', data.list[0])

                setWeather(data.list[0])
            } catch (error) {
                console.log('ERROR:', error.message)
            }

        }

        getData()
    }, [])

    return <div>
        Weather for {weather.name}
        <p>Humidity: {weather.main.humidity}</p>

        {
            Object.entries(weather.main).map((item, idx)=> <div key={idx}>

                {item[0]} : {item[1]}
            </div>)
        }
    </div>
}