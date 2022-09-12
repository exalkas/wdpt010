import { NavLink } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <ul className='mx-[20px] flex gap-[20px]'>
                <NavLink activeclassname='active' to='/'><li className='mx-[20px]'>Home</li></NavLink>
                <NavLink activeclassname='active'to='/categories'><li className='mx-[20px]'>Categories</li></NavLink>
                <NavLink activeclassname='active' to='/contact'><li className='mx-[20px]'>Contact</li></NavLink>
            </ul>
        </div>
    );
}

export default Menu;