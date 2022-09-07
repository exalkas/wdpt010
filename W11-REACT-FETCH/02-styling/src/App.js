import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [photos, setPhotos] = useState([])

  // useEffect(() => {

  //     const response = fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').then(data => data.json()).then(data => {
      
  //       const array = []

  //       for (let i = 0; i < 10; i++ ) {
  //         array.push(Math.ceil(Math.random() * 800))
  //       }

  //       setPhotos(data.photos.filter((item, idx) => array.includes(idx)))
      
  //     }).catch(error => console.log(error.message))
      

  //   }, [])

  useEffect(() => {

    async function getData() {

      try {
        
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        
        const data = await response.json()
        console.log("🚀 ~ data", data)

      } catch (error) {
        
        console.log('ERROR:', error.message)
        alert('error getting data')
      }
    }

    getData()
  })

    console.log('photos is', photos)
  return (
    <div className="App">

      {
        photos.map((photo, idx) => <img key={idx} src={photo.img_src} alt=''/>)
      }
    </div>
  );
}

export default App;
