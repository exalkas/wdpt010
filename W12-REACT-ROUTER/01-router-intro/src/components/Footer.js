import {NavLink} from 'react-router-dom'

function Footer(props) {

    const menu = [{
        name:'Home',
        path: '/'
    }, 
    {
        name:'Categories',
        path: '/categories'
    }, 
    {
    name: 'Contact',
    path: '/contact'

    }]

    return (
        <div>
            {
                menu.map((item, idx) => <NavLink activeclassname= 'active' to={item.path} key = {idx}>
                    {item.name}
                </NavLink>)
            }
        </div>
    );
}

export default Footer;