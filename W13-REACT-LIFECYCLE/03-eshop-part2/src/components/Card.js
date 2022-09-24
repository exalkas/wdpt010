import {Button2} from './button'

export default function Card(props) {

    const {name, image, price, rating} = props.product

    return <div className='card'>
        {name}
        <img src={image} alt=''/>
        <p>{price}</p>
        <p>{rating}</p>
        <Button2 text='add to cart' onclick={props.cb}/>
    </div>
}