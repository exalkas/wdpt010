import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [users, setUsers] = useState([])

  useEffect(() => {

    getData()
  }, [])

  async function getData() {

    const response = await axios.get('/user/list')
    console.log("🚀 ~ response", response)

    if (response.data.success) setUsers(response.data.users)
  }

  const handleRegister = async () => {

    const response = await axios.post('/user/register', data)

      if (response.data.success) {
        getData()
      }
    console.log("🚀 ~ response", response)

      
  }

  return (
    <div className="App">
      <input placeholder='type your email' value={data.email} onChange={e => setData({...data, email: e.target.value })}/>
      <input placeholder='type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
      <input placeholder='type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={handleRegister}>Register</button>
      {
        users.map((item, idx) => {

          return <div key={idx}>{item.email}</div>
        })
      }
    </div>
  );
}

export default App;
