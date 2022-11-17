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
  const [userToEdit, setUserToEdit] = useState({
    email: '',
    username: '',
    password: ''
  })

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

  const handleDelete = async (id) => {
    // console.log("🚀 ~ id", id)
    
    const response = await axios.delete('/user/delete?id=' + id)
    // console.log("🚀 ~ response", response)

    if (response.data.success) {

      const cleanedUsers = users.filter(item => item._id !== id)
      // console.log("🚀 ~ cleanedUsers", cleanedUsers)

      setUsers([...cleanedUsers])
    }
  }

  const updateEdit = item => {
  console.log("🚀 ~ item", item)

    setUserToEdit({...item})
  }

  const handleEdit = async () => {

    const response = await axios.patch('/user/edit', userToEdit)
    console.log("🚀 ~ response", response)

    if (response.data.success) {

      const idx = users.findIndex(item => item._id === userToEdit._id)

      const updatedUsers = [...users]

      updatedUsers[idx] = {...userToEdit}

      setUsers([...updatedUsers])
    }

  }

  return (
    <div className="App text-red-500">
      <input placeholder='type your email' value={data.email} onChange={e => setData({...data, email: e.target.value })}/>
      <input placeholder='type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
      <input placeholder='type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={handleRegister}>Register</button>
      {
        users.map((item, idx) => {

          return <div key={item._id}>{item.email} 
          <span onClick={() => handleDelete(item._id)}>X</span>
          <span onClick={() => updateEdit(item)}>edit</span>
          </div>
        })
      }
      <hr className={{width: '100%'}}/>

      <div className="App">
        <input placeholder='type your email' value={userToEdit.email} onChange={e => setUserToEdit({...userToEdit, email: e.target.value })}/>
        <input placeholder='type your username' value={userToEdit.username} onChange={e => setUserToEdit({...userToEdit, username: e.target.value})}/>
        <input placeholder='type your password' value={userToEdit.password} onChange={e => setUserToEdit({...userToEdit, password: e.target.value})}/>
        <button onClick={handleEdit}>Save</button>
      </div>
    </div>
  );
}

export default App;
