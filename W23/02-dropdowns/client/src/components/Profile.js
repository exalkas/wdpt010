import { useContext, useState, useEffect } from "react";
import { AppContext } from "./Context";
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const hobbies = [
    'Tennis',
    'Traveling',
    'Coding',
    'Movies',
    'Yoga'
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Profile() {

    const {state, dispatch} = useContext(AppContext)

    const [data, setData] = useState({...state.user})
    const [imgUrl, setImgUrl] = useState(state.user.image ? 'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + state.user.image : null)
    const [file, setFile] = useState(null)
    const [selectedHobbies, setSelectedHobbies] = useState([...state.user.hobbies])

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
        formdata.set('gender', data.gender)
        formdata.set('hobbies', JSON.stringify(selectedHobbies))

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

    console.log("🚀 ~ selectedHobbies", selectedHobbies)
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

            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.gender}
                    label="Age"
                    onChange={e => setData({...data, gender: e.target.value})}
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Select Hobbies</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedHobbies}
                    onChange={(e) => setSelectedHobbies( e.target.value)}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {hobbies.map((item) => (
                        <MenuItem key={item} value={item}>
                            <Checkbox checked={selectedHobbies.indexOf(item) > -1} />
                            <ListItemText primary={item} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <img className='w-[300px] h-[300px] rounded-full object-cover' 
                src={imgUrl} alt=''/>
            <button onClick={handleSave}>Save Profile</button>
        </div>
    );
}

export default Profile;