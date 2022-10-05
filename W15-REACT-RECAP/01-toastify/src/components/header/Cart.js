import {BiCart} from 'react-icons/bi'

import { EshopContext } from '../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Cart(props) {

    const {cart} = useContext(EshopContext)

    return <div className='cart'>
        <Link to='/cart'><BiCart className='icon carticon'/></Link>
        <span>{cart.length}</span>
    </div>
}