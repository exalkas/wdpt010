import { useState } from 'react';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

function ChangePass() {
    const navigate = useNavigate()
    const {token} = useParams()
    const [password, setPassword] = useState('')
    const [verifyPass, setverifyPass] = useState('')

    const handleSubmit = async () => {
        
        if (!password || password !== verifyPass) return alert('Passwords do not match')

        const response = await axios.post('/user/changepassword', {
            password,
            token
        })
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            navigate('/')
        }
    }

    return (
        <div className='flex items-center 
        w-[500px]
        justify-center gap-[20px] h-[400px] p-[40px] 
        flex-col border-2 border-slate-500 rounded-md'>
            <h3>Change your password</h3>
            <label>
                Type your password
                <input  className='border-2 border-slate-500 p-[5px]' value={password} onChange={e=> setPassword(e.target.value)}/>
            </label>
            <label>
                Retype your password
                <input  className='border-2 border-slate-500 p-[5px]' value={verifyPass} onChange={e=> setverifyPass(e.target.value)}/>
            </label>
            <button className='border-2 border-slate-500 p-[5px]'
            onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ChangePass;