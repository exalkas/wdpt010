import { useContext, useState } from "react";
import { AppContext } from "./Context";
import axios from 'axios'

function Profile() {

    const {state, dispatch} = useContext(AppContext)

    const [data, setData] = useState({...state.user})
    const [imgUrl, setImgUrl] = useState(state.user.image ? 'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + state.user.image : null)
    const [file, setFile] = useState(null)

    const handleImageChange = (e) => {

        console.log('file is', e.currentTarget.files[0])

        const url = URL.createObjectURL(e.currentTarget.files[0])

        setImgUrl(url)
        setFile(e.currentTarget.files[0])
    }

    const handleSave = async () => {

        const formdata = new FormData()
        
        console.log("🚀 ~ data", data)

        // Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

        formdata.set('_id', data._id)
        formdata.set('username', data.username)
        formdata.set('email', data.email)
        formdata.set('address', data.address)
        formdata.set('age', data.age)
        if (file) formdata.set('image', file, 'somefilename')
        
        const config = {
            Headers: {'content-type': 'multipart/form-data'}
        } 
        
        const response = await axios.patch('/user/profile', formdata, config)
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'login',
                payload: {...response.data.user}
            })
        } else {
            if (response.data.errorId === 1) {
                alert('email and username are mandatory')
            }
        }
    }

    return (
        <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
            <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
            <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
            <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.address} onChange={e => setData({...data, address: e.target.value})}/>
            <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.age} onChange={e => setData({...data, age: e.target.value})}/>
            <label className='cursor-pointer'>
                Select your profile image
                <input onChange={handleImageChange} type='file' className='hidden'/>
            </label>
            <img className='w-[300px] h-[300px] rounded-full object-cover' 
                src={imgUrl} alt=''/>
            <button onClick={handleSave}>Save Profile</button>
        </div>
    );
}

export default Profile;