import {Link} from 'react-router-dom'

export default function Menu() {
    return <div className='menu'>
        <ul>
            <Link to='/'><li>Infinite</li></Link>
            <Link to='/loadmore'><li>Load More</li></Link> 
            <Link to='/classic'><li>Classic</li></Link>
        </ul>
    </div>
}