import {FaHome} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='bg-teal-500 text-white 
            w-full h-[100px] flex justify-center 
            items-center gap-[20px] text-[2rem]  cursor-pointer'>
            <Link to='/posts'><FaHome className='hover:text-slate-600'/> </Link>
            <Link to='/'><FiLogOut className='hover:text-slate-600'/> </Link>
        </div>
    );
}

export default Header;