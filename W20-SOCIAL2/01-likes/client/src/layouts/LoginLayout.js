import {Outlet} from 'react-router-dom'

function LoginLayout() {
    return (
        <div className='flex items-center 
        w-full
        justify-center gap-[20px] min-h-[100vh] 
        flex-col'>
            <Outlet />
        </div>
    );
}

export default LoginLayout;