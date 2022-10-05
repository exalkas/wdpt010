import {Button2} from './button'
import { EshopContext } from './Context'
import { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
export default function Card(props) {

    const {name, image, price, rating} = props.product

    const {dispatchState} = useContext(EshopContext)

    // useEffect(() => {
    //     throw Error('Oops error in card')
    // }, [])

    const handleAddToCart = () => {
        
        dispatchState({
            type: 'addToCart',
            payload: props.product
        })
        toast.success(`Product ${props.product.name} added to the cart`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
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