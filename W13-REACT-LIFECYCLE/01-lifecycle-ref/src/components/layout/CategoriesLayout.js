import { Outlet } from "react-router-dom";
import Header from "../Header";


function CategoriesLayout(props) {
    return (
        <div>
            <Header />
            <div className='flex justify-between'>
                <div className='bg-red-200 h-[300px]'>this is the left column</div>
                <Outlet />
            </div>
        </div>
    );
}

export default CategoriesLayout;