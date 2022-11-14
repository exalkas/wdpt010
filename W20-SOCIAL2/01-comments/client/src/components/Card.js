import { useContext } from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {AppContext} from '../components/Context'
import axios from 'axios'

function Card(props) {
    console.log("🚀 ~ Card", props)
    
    const {state, dispatch} = useContext(AppContext)

    const handleLike = async () => {

        const response = await axios.put('/post/likejs', {
            _id: props.post._id,
            user:state.user._id
        })
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'like',
                payload: response.data.post
            })
        }

        
    }

    return (
        <div className='flex flex-col gap-[20px] border-2 border-slate-500 rounded-md w-[400px]  p-[20px]'>
            <div className='flex'>
                {props.post.owner.username}        
                <img 
                    className='rounded-full w-[50px] h-[50px] object-cover' 
                    src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + props.post.owner.image} alt=''/>
            </div>
            <hr />
            <p>
                {props.post.text}  
            </p>
                <hr />
            {
                props.post.likes.includes(state.user._id) ? 

                <>
                    <AiFillHeart onClick={handleLike} className='text-red-500 text-[2rem] cursor-pointer'/> <span>{props.post.likes.length}</span>
                </>
                :
                <>
                <AiOutlineHeart onClick={handleLike} className='text-red-500 text-[2rem] cursor-pointer'/> <span>{props.post.likes.length}</span>
                </>
            }
        </div>
    );
}

export default Card;