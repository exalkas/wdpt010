import React from 'react';
import { Outlet } from 'react-router-dom';

function LoginLayout(props) {
    return (
        <div className='w-full flex h-[100vh] justify-center items-center bg-black flex-col gap-[20px]'>
            <Outlet />
        </div>
    );
}

export default LoginLayout;