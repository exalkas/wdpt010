import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    
    const [data, setData] = useState({
        email: '',
        username: '',
        password: ''
      })

    const handleLogin = async () => {
        if ((!data.email && !data.username) || !data.password) {
            alert('Please provide some data')
            return
        }

        const response = await axios.post('/user/register', data)
        console.log("🚀 ~ response", response)

        if (response.data.success) {
           
            navigate('/')
        }
    }
    console.log("🚀 ~ handleLogin")

    return (
        <div className='flex items-center 
            justify-center gap-[20px] min-h-[100vh] 
            flex-col border-2 border-slate-500 rounded-md'>
                
            <input placeholder='type your email' value={data.email} onChange={e => setData({...data, email: e.target.value })}/>
            <input placeholder='type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
            <input placeholder='type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
            <button onClick={handleLogin}>Register</button>
        </div>
    );
}

export default Login;