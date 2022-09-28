import { useState, useContext } from 'react';
import {EshopContext} from '../components/Context'

function CartPage() {

    const {cart, dispatchState} = useContext(EshopContext)


    const handleDelete = (idx) => {
        dispatchState({
            type: 'deleteFromCart',
            payload: idx
        })
    }

    return (
        <div className="main">
            {
                cart.map((item, idx) => <div key={idx}>
                    {item.name} {item.description} {item.price}  <button onClick={() => handleDelete(idx)}>X</button>
                </div>)
            }
            
        </div>
    );
}

export default CartPage;