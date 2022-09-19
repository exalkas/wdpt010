import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Contact() {

  const navigate = useNavigate()

  useEffect(() => {

    if (true) {
      setTimeout(() => navigate('/main'), 3000)
    }

  }, [])

  return (
    <div>
      
      Hello from Contact
    </div>
  );
}

export default Contact;
