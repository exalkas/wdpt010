import { Outlet } from 'react-router-dom';
import Header from '../Header'

function MainLayout(props) {
    console.log(props)
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;