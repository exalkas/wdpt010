

function Card(props) {
    console.log("🚀 ~ Card", props)
    
    return (
        <div className='flex flex-col gap-[20px] border-2 border-slate-500 rounded-md w-[400px] h-[200px] p-[20px]'>
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
                  
        </div>
    );
}

export default Card;