import {useState, useContext} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import { AppContext } from './Context'

function Login() {

    const {dispatch} = useContext(AppContext)
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '', //emailOruser: ''
        username: '',
        password: ''
      })

    const handleLogin = async () => {

        if ((!data.email && !data.username) || !data.password) {
            alert('Please provide some data')
            return
        }

        const response = await axios.post('/user/login', data)
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'login',
                payload: {...response.data.user}
            })
            navigate('/posts')
        }
          
    }

    return (
        <div className='flex items-center 
        w-[400px]
        justify-center gap-[20px] h-[400px] p-[40px] 
        flex-col border-2 border-slate-500 rounded-md'>
            <h3>Welcome to WDPT010 social app</h3>
            <input 
                className='border-2 border-slate-500 p-[5px]'
                placeholder='type your email' value={data.email} onChange={e => setData({...data, email: e.target.value })}/>
            <input 
                className='border-2 border-slate-500 p-[5px]'
                placeholder='type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
            <input 
                className='border-2 border-slate-500 p-[5px]'
                placeholder='type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
            
            <button 
                className='border-2 border-slate-500 p-[5px]'
                onClick={handleLogin}>Login</button>
                <Link to='/forgotpassword'>Forgot password?</Link>
        </div>
    );
}

export default Login;