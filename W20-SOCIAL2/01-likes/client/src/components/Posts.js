import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from './Context'
import Card from './Card'

function Posts() {

    const {dispatch, state} = useContext(AppContext)
    const [modalOpen, setModalOpen] = useState(false)

    const [text, setText] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get('/post/list')
        console.log("🚀 ~ response", response)
        
        dispatch({
            type: 'getPosts',
            payload: response.data.posts
        })
    }

    const handleSave = async () => {

        const response = await axios.post('/post/add', {
            text,
            owner: state.user._id
        })

        if (response.data.success) {

            dispatch({
                type: 'addPost',
                payload: response.data.post
            })
        }
        console.log("🚀 ~ response", response)

        setModalOpen(false)
    }

    console.log('state is', state)
    return (
        <div className='flex items-center 
        w-full
        gap-[20px] min-h-[100vh] p-[40px] 
        flex-col'>
            <FaPlusCircle className='text-[2rem]' onClick={() => setModalOpen(true)}/>
             {
                state.posts.length ?
                    state.posts.map((item => <Card key={item._id} post={item}/>))
                    :
                    'No posts to show'
             }
            {
                modalOpen ?
                    <div className='absolute top-[calc(50vh - 200px)] 
                        flex items-between justify-center
                        flex-col
                        p-[20px]
                    left-[calc(50vw - 200px)] w-[400px] h-[400px] bg-slate-300'>
                        <textarea value={text} onChange={e => setText(e.target.value)}></textarea>

                        <div className='mt-auto'>
                            <button onClick={() => setModalOpen(false)}>Close</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </div>      
                : null
            }   
        </div>
)}
export default Posts;