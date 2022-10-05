import {Link} from 'react-router-dom'

export default function Menu() {
    return <div className='menu'>
        <ul>
           <Link to='/'><li>Home</li></Link> 
            <li>Deals</li>
            <li>Categories</li>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/addnew'><li>Add Product</li></Link>
            <Link to='/edit'><li>Edit</li></Link>
        </ul>
    </div>
}