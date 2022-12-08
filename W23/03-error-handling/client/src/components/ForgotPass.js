import React, { useState } from 'react';
import axios from 'axios'

function ForgotPass(props) {

    const [data, setData] = useState('')

    const handleSubmit = async () => {
        
        const response = await axios.post('/user/forgotpassword', {emailOrUsername: data})
        console.log("🚀 ~ response", response)
    }

    return (
        <div className='flex items-center 
        w-[500px]
        justify-center gap-[20px] h-[400px] p-[40px] 
        flex-col border-2 border-slate-500 rounded-md'>
            <h3>Forgot your password?</h3>
            <label>
                Type your email or username
                <input  className='border-2 border-slate-500 p-[5px]' value={data} onChange={e=> setData(e.target.value)}/>
            </label>
            <button className='border-2 border-slate-500 p-[5px]'
            onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ForgotPass;