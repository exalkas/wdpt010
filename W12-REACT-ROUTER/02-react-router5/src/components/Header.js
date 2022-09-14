import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className='flex justify-center items-center gap-[20px]'>
            <Link to='/'>Home</Link>
            <Link to='/categories'>Categories</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Header;