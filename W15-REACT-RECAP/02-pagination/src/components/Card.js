import {Button2} from './button'
import { useEffect } from 'react'
export default function Card(props) {

    const {name, image, price, rating} = props.product


    return <div className='card'>
        {name}
        <img src={image} alt=''/>
        <p>{price}</p>
        <p>{rating}</p>
        
    </div>
}