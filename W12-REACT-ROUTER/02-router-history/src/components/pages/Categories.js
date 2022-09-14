
import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Categories() {

  const navigate = useNavigate()

  return (
    <div>
      
      Hello from Categories
      <button onClick={() => navigate(1)} className='mx-[20px]'>Back</button>
    </div>
  );
}

export default Categories;
