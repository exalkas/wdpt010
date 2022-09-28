import {Button2} from './button'
import { EshopContext } from './Context'
import { useContext } from 'react'

export default function Card(props) {

    const {name, image, price, rating} = props.product

    const {dispatchState} = useContext(EshopContext)

    const handleAddToCart = () => {
        dispatchState({
            type: 'addToCart',
            payload: props.product
        })
    }

    return <div className='card'>
        {name}
        <img src={image} alt=''/>
        <p>{price}</p>
        <p>{rating}</p>
        <Button2 text='add to cart' onclick={handleAddToCart}/>
    </div>
}