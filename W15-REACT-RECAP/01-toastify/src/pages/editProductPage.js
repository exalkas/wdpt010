import { useState, useContext } from 'react';
import {EshopContext} from '../components/Context'

function EditProductPage(props) {

    const {globalState, dispatchState} = useContext(EshopContext)

    const [localProduct, setLocalProduct] = useState({ // LOCAL STATE
        name: '',
        descr: '',
        price: 0
    })

    const [localIdx, setLocalIdx] = useState(-1)

    const handleSave = async () => {

        try {
            dispatchState({
                type: 'addProduct',
                payload: localProduct
            }) // updates the context

        } catch (error) {
            console.log('Error editing data', error.message)
        }

    }

    const handleDelete = (idx) => {
        dispatchState({
            type: 'deleteProduct',
            payload: idx
        })
    }

    const editValues = (product, idx) => {
        setLocalProduct({...product})
        setLocalIdx(idx)
    }

    const handleEdit = () => {
        dispatchState({
            type: 'editProduct',
            payload: {
                idx: localIdx,
                product: localProduct
            }
        })
    }

    return (
        <div className="main">
            {
                globalState.products.map((item, idx) => <div key={idx}>
                    {item.name} {item.description} {item.price}  <button onClick={() => handleDelete(idx)}>X</button> <button onClick={() => editValues(item, idx)}>Edit</button>
                </div>)
            }
            <button onClick={handleSave}>Save</button>
            <hr />
            <div>
                <input value={localProduct.name} onChange={e => setLocalProduct({...localProduct, name: e.target.value})}/>
                <input value={localProduct.descr} onChange={e => setLocalProduct({...localProduct, descr: e.target.value})}/>
                <input value={localProduct.price} onChange={e => setLocalProduct({...localProduct, price: e.target.value})}/>

                <div>
                    <button onClick={handleEdit}>Save edit</button>
                </div>
            </div>
        </div>
    );
}

export default EditProductPage;