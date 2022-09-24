import { useState } from 'react';
import Header from '../components/header/Header';

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

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        featured: false,
        colorsProp: new Array(colors.length).fill(false)
    })

    const handleColorChange = (idx) => {
        
        const oldColors = [...product.colorsProp]

        oldColors[idx] = !oldColors[idx]

        setProduct({...product, colorsProp: [...oldColors] })
    }

    const handleSave = async () => {

        console.log("🚀 ~ product", product)

        const newProduct = {...product}

        newProduct.colorsProp = colors.filter((item, idx) => product.colorsProp[idx] === true)
        console.log("🚀 ~ newProduct.colorsProp", newProduct.colorsProp)

        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }) // syntax fetch('url', {configutation})

            // axios.post('url', data)

            const data = await response.json();
            console.log("🚀 ~ data", data)

        } catch (error) {
            console.log('Error sending data', error.message)
        }

    }

    return (
        <div className="main">
            <Header />

            <div>
                <input placeholder='product name' type='text' value={product.name} onChange={e => setProduct({...product, name: e.target.value})}/>
            </div>
            <div>
                <textarea placeholder='product description' type='text' value={product.description} onChange={e => setProduct({...product, description: e.target.value})}/>
            </div>
            <div>
                Price: <input placeholder='product price' type='number' value={product.price} onChange={e => setProduct({...product, price: e.target.value})}/>
            </div>
            <div>
                Choose Category: <select value={product.category} onChange={e => setProduct({...product, category: e.target.value})}>
                    <option value=''>Select category</option>
                    <option value='Mobile phone'>Mobile phone</option>
                    <option value='Mobile accessory'>Mobile accessory</option>
                    <option value='Smartwatch'>Smartwatch</option>
                </select>
            </div>
            <div>
                Featured: <input type='checkbox' checked={product.featured} onChange={e => setProduct({...product, featured: e.target.checked})} />
            </div>
            <div>
                Choose available colors:
                {
                    colors.map((item, idx) => (
                        <div key={idx}>
                           {item}: <input type='checkbox' checked={product.colorsProp[idx]} onChange={() => handleColorChange(idx)}/>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default AddProductPage;