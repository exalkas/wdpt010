
import { useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Categories() {

  let history = useHistory()

  return (
    <div>
      
      Hello from Categories
      <button onClick={() => history.goBack()} className='mx-[20px]'>Back</button>
    </div>
  );
}

export default Categories;
