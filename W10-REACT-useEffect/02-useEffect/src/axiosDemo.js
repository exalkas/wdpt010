import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function AxiosDemo() {

    const [recipe, setRecipe] = useState({})

  useEffect(() => {

    function handleData(response) {
        console.log("🚀 ~ response", response.data.meals[0])

        setRecipe(response.data.meals[0])
    }

    function handleError(error) {
        alert(error.message)
    }

    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(handleData)
    .catch(handleError)


    async function getData() {

        try {
            
            const response =  await axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
        
            console.log("🚀 ~ response", response.data.meals[0])

            setRecipe(response.data.meals[0])

        } catch (error) {
            alert(error.message)
        }
    }

    // getData()

  }, [])

  return ( 

  <div className="main">
    {recipe.strMeal}

    <img src={recipe.strMealThumb} alt=''/>
  </div>
  );
}

export default AxiosDemo;