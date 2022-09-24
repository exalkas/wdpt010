import {BiCart} from 'react-icons/bi'

export default function Cart(props) {
    return <div className='cart'>
        <BiCart className='icon carticon'/>
        <span>{props.counter}</span>
    </div>
}