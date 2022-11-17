import {FaHome} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './Context'

function Header() {
    
    const {state} = useContext(AppContext)
    return (
        <div className='bg-teal-500 text-white 
            w-full h-[100px] flex justify-center 
            items-center gap-[20px] text-[2rem]  cursor-pointer'>
            <Link to='/posts'><FaHome className='hover:text-slate-600'/> </Link>
            <Link to='/profile'><CgProfile className='hover:text-slate-600'/> </Link>
            <Link to='/'><FiLogOut className='hover:text-slate-600'/> </Link>

            <img className='w-[100px] h-[100px] object-cover rounded-full' src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + state.user.image} alt=''/>
        </div>
    );
}

export default Header;