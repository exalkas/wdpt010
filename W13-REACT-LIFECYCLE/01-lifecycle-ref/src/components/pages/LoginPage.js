import {Link} from 'react-router-dom'
import {useRef, useEffect, useState} from 'react'

function LoginPage(props) {

    // syntax: someVariable = useRef(initialValue)
    /**
     * references keep their value between rendering
     * references work SYNCHRONOUS 
     */
  const reference = useRef([])
  console.log("🚀 ~ reference", reference)

  useEffect(() => {

    reference.current[0].focus()
    reference.current[0].addEventListener('alkis', () => console.log('custom event'))
  }, [])

  const [user, setUser] = useState({
    userName: {
        required: true,
        min: 5,
        max: 10,

    },
    pass: ''
  })

  const [smoker, setSmoker] = useState(false)

  const handleChange = e =>  {

    // console.log('key is', e.target.key)

  }

  const handleKey = e =>{ 
    

    if (e.key === 'Enter') {
        
        if (parseInt(e.target.id) < reference.current.length - 1) {
        
            console.log("🚀 ~ reference.current.length", reference.current.length)
            console.log('ID is', e.target.id)
            reference.current[parseInt(e.target.id) + 1].focus()
        } else {
            reference.current[0].focus()
        }

        } 
}

const handleBlur = e => {
    console.log("🚀 ~ handleBlur", e.target.value)

    if (e.target.value.length < 4) alert('You pass must be more then 3 chars')
}

    console.log('Switch value is', smoker)
    return (
        <div className='w-full flex h-[100vh] justify-center items-center bg-black flex-col gap-[20px] text-white'>
            <input id='0' onKeyPress={handleKey} onChange={handleChange} ref={el => reference.current[0] = el} placeholder='type your username' />

            <input id='1' 
                onKeyPress={handleKey} 
                placeholder='type your password' 
                ref={el => reference.current[1] = el} 
                onBlur={handleBlur}
            />
            <input id='2' onKeyPress={handleKey} placeholder='type your address' ref={el => reference.current[2] = el} />
            <input id='3' onKeyPress={handleKey} placeholder='type your email' ref={el => reference.current[3] = el} />

            <div className="flex justify-center">
                <div className="form-check form-switch">
                    <input value={smoker} onChange={() =>{ setSmoker(!smoker);}} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label inline-block text-gray-800"      htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
            </div>

            <Link to="/main" className='text-white'>Register</Link>
        </div>
    );
}

export default LoginPage;