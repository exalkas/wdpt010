import {Link} from 'react-router-dom'

function LoginPage(props) {
    return (
        <div className='w-full flex h-[100vh] justify-center items-center bg-black flex-col gap-[20px]'>
            <input placeholder='type your username' />
            <input placeholder='type your password' />
            <Link to="/main" className='text-white'>Login</Link>
        </div>
    );
}

export default LoginPage;