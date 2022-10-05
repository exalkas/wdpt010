import { useState, useContext } from 'react';
import Header from '../components/header/Header';
import {EshopContext} from '../components/Context'
/**
 * 
 * 1. Product name
   2. Product description (textarea)
   3. Product Price
   4. Product category - A select element with the following options:
      1. Mobile phone
      2. Mobile accessory
      3. Smartwatch
   5. A checkbox that when checked indicates that the product is featured
   6. Product available colors - that is the colors that the product may available in. it could be available in more that one colors. It needs to be a check box group with the following options:
      1. Pink
      2. Red
      3. Black
      4. Sky blue
      5. White
      6. Golden
   7. A save button.
 */

function AddProductPage(props) {

    const colors = ['Pink', 'Red', 'Black', 'Sky Blue', 'White', 'Golden']

    const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')

    const {globalState, dispatchState} = useContext(EshopContext)

    const [newProduct, setNewProduct] = useState({ // LOCAL STATE
        name: '',
        description: '',
        price: 0,
        category: '',
        featured: false,
        colorsProp: new Array(colors.length).fill(false)
    })

    const handleColorChange = (idx) => {
        
        const oldColors = [...newProduct.colorsProp]

        oldColors[idx] = !oldColors[idx]

        setNewProduct({...newProduct, colorsProp: [...oldColors] })
    }

    const handleSave = async () => {

        // console.log("🚀 ~ product", newProduct)

        const newProductToSend = {...newProduct}

        newProductToSend.colorsProp = colors.filter((item, idx) => newProductToSend.colorsProp[idx] === true)
        console.log("🚀 ~ newProduct.colorsProp", newProductToSend.colorsProp)

        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newProductToSend),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }) // syntax fetch('url', {configutation})

            // axios.post('url', data)

            const data = await response.json();
            console.log("🚀 ~ data", data)

            dispatchState({
                type: 'addProduct',
                payload: newProduct
            }) // updates the context

        } catch (error) {
            console.log('Error sending data', error.message)
        }

    }

    function handleFile (e) {
        console.log("🚀 ~ handleFile", e.target.files[0])

        setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="main">
            <div>
                <input placeholder='product name' type='text' value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})}/>
            </div>
            <div>
                <textarea placeholder='product description' type='text' value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})}/>
            </div>
            <div>
                Price: <input placeholder='product price' type='number' value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})}/>
            </div>
            <div>
                Choose Category: <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value=''>Select category</option>
                    <option value='Mobile phone'>Mobile phone</option>
                    <option value='Mobile accessory'>Mobile accessory</option>
                    <option value='Smartwatch'>Smartwatch</option>
                </select>
            </div>
            <div>
                Featured: <input type='checkbox' checked={newProduct.featured} onChange={e => setNewProduct({...newProduct, featured: e.target.checked})} />
            </div>
            <div>
                Choose available colors:
                {
                    colors.map((item, idx) => (
                        <div key={idx}>
                           {item}: <input type='checkbox' checked={newProduct.colorsProp[idx]} onChange={() => handleColorChange(idx)}/>
                        </div>
                    ))
                }
            </div>
            <div className='fileWrapper'>
                <label htmlFor='file' className='file'>Choose image</label><input onChange={handleFile} id='file' type='file' accept="image/png, image/jpeg"/>
            </div>
            <img src={image} alt='' />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default AddProductPage;