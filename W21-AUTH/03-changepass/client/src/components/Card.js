import { useContext, useState } from 'react';
import {AiOutlineHeart, AiFillHeart, AiFillEdit} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'
import {AppContext} from '../components/Context'
import axios from 'axios'
import {AiOutlineSend} from 'react-icons/ai'

function Card(props) {
    console.log("🚀 ~ Card", props)
    
    const {state, dispatch} = useContext(AppContext)

    const [comment, setComment] = useState('')

    const [editModalOpen, setEditModalOpen] = useState(false)
    const [commentToEdit, setCommentToEdit] = useState({
        user: null,
        commentId: null,
        postId: null
    })

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

    const handleSend = async () => {

        const response  = await axios.post('/comment/add', {
            text: comment,
            owner: state.user._id,
            post: props.post._id
        })
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'comment',
                payload: response.data.post
            })

            setComment('')
    }
    }

    const handleDelete = async (id) => {

        // const response = await axios.delete(`/comment/delete?post=${props.post._id}&comment=${id}&user=${state.user._id}`)
        const response = await axios.delete(`/comment/delete/${props.post._id}/${id}/${state.user._id}`)
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'comment',
                payload: response.data.post
            })
        }

    }

    const handleEdit = (text, id) => {
        setEditModalOpen(true)
        setComment(text)
        setCommentToEdit({
            user: state.user._id,
            commentId: id,
            postId: props.post._id
        })
    }

    const handleSaveEdit = async () => {

        const response = await axios.patch('/comment/edit', {
            ...commentToEdit,
            text: comment
        })
        console.log("🚀 ~ response", response)

        if (response.data.success) {
            dispatch({
                type: 'comment',
                payload: response.data.post
            })

        }
        setEditModalOpen(false)
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

                <div className='flex gap-[20px]'>
                    <AiFillHeart onClick={handleLike} className='text-red-500 text-[2rem] cursor-pointer'/> <span>{props.post.likes.length}</span>
                </div>
                :
                <div className='flex gap-[20px]'>
                <AiOutlineHeart onClick={handleLike} className='text-red-500 text-[2rem] cursor-pointer'/> <span>{props.post.likes.length}</span>
                </div>
            }
             <hr />
             {
                props.post.comments.length ? 
                    props.post.comments.map((item, idx) => <div className='flex justify-between' key={idx}>
                        <span className='grow'>{item.text} </span>
                        <AiFillEdit 
                            className='text-[20px] text-red-500 cursor-pointer hover:text-lime-500'
                            onClick={() => handleEdit(item.text, item._id)}
                        />
                        <MdDeleteForever 
                            className='text-[20px] text-red-500 cursor-pointer hover:text-lime-500'
                            onClick={() => handleDelete(item._id)}
                        />    
                    </div>)
                 :
                 'no comments available'
             }
             <div>
                <label className='border-2 border-slate-500 flex items-center p-[10px]'>
                <textarea  
                    rows="4" 
                    cols="50"
                    className='resize-none ' 
                    placeholder='type your comment'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <AiOutlineSend 
                    className='text-[2rem] cursor-pointer hover:text-red-500'
                    onClick={handleSend}
                />

                </label>
            </div>
            {
                editModalOpen ? (
                    <div className='w-[400px] h-[300px] absolute top-[200px] left-[200px]
                        bg-slate-200
                    '>
                        <label className='border-2 border-slate-500 flex items-center p-[10px]'>
                            <textarea  
                                rows="4" 
                                cols="50"
                                className='resize-none ' 
                                placeholder='type your comment'
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={() => setEditModalOpen(false)}>Close</button>
                    </div>
                    )

                    : null
            }
        </div>
    );
}

export default Card;