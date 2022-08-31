import { useState } from 'react'

import Button from './components/button'
import Input from './components/input'

export default function LoginPage() {

    let [data, setData] = useState({
        user: '',
        pass: ''
    })

    const handleUser = (e) => {
        console.log('key pressed', e.target.value)

        setData({...data, user: e.target.value})
        console.log('b4 rendering data is', data)
    }
    const handlePass = (e) => setData({...data, pass: e.target.value})

    // console.log('b4 rendering data is', data)
    return <div className="main">

        <Input text="Type your username"
            cb={handleUser}
            value={data.user}
        />

        <Input text="Type your password"
            cb={handlePass}
            value={data.pass}
        />


        <Button text="Login"/>
    </div>
}