import './App.css';

import {useEffect, useState, useRef} from 'react'
import RadioGroup1 from './components/RadioGroup';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const cities = [
  {
    value:'berlin',
    label: 'Berlin'
  }, 
  {
    value:'athens',
    label: 'Athens'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'london',
    label: 'London'
  },
  {
    value: 'helsinki',
    label: 'Helinki'
  },
  
]

const fruits = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

const extraIngredients = [
  {
    name: 'Mushrooms',
    price: 1,
  },
  {
    name: 'Green peppers',
    price: 2
  },
  {
    name: 'Bacon',
    price: 3
  },
  {
    name: 'Ham',
    price: 3
  },
  {
    name: 'Peperoni',
    price: 3
  },
]

function App() {
 
  const [city, setCity] = useState('Select a city')
  const [gender, setGender] = useState()
  const [ingredients, setIngrdients] = useState(new Array(extraIngredients.length).fill(false))

  const handleCity = e => setCity(e.target.value)

  const handleGender = e => setGender(e.target.value)

  const handleIngredients = (idx) => {

    const oldIngredients = [...ingredients]

    oldIngredients[idx] = !oldIngredients[idx]

    setIngrdients(oldIngredients)
  }

  const calcTotal = () => extraIngredients.reduce((acc, item, idx) => {

    if (ingredients[idx] === true) {

      acc += item.price
    }

    return acc
  }, 0)

  return (
    <div className='flex flex-col w-full justify-center items-center p-[30px]'>
      <div>
        <label htmlFor='city'>Select your city</label>
        <select id='city' value={city} onChange={handleCity}>
          {
            cities.map((item, idx) => (
              <option key={idx} value={item.value}>{item.label}</option>
            ))
          }
        </select>
      </div>
      <hr className='w-full m-[20px]'/>
      Select your gender
      <RadioGroup1 name='gender' items={['male', 'female', 'N/A']} state = {gender} cb={handleGender} />
      <hr className='w-full m-[20px]'/>
      <div>
        Select your extra ingredients

          {
            extraIngredients.map((item, idx) => (

            <div key={idx}>
              <label>
                {item.name} {item.price}
                <input 
                  className='mx-[20px]'
                  type='checkbox' 
                  checked = {ingredients[idx]}
                  value={item.name}
                  onChange={() => handleIngredients(idx) }
                />
              </label>
            </div>
            ))
          }


          <p>Total: {calcTotal()}</p>
      </div>
      <hr className='w-full m-[20px]'/>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio onChange={handleGender}/>} label="Female" />
        <FormControlLabel value="male" control={<Radio onChange={handleGender}/>} label="Male" />
        <FormControlLabel value="other" control={<Radio onChange={handleGender}/>} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}

export default App;
