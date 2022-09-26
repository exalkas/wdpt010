import { createContext, useState } from "react";
import {data} from '../01-eshop-data'


export const EshopContext = createContext(); // 1. create context

console.log("🚀 ~ EshopContext", EshopContext)


export default function Andrea({children}) { // 2. create a function

    // const [eshopState, setEshopState] = useState({
    //     products: data,
    //     cart: [],
    //     searchText: '',
    //     userData: { name: '',
    //     email: ''}
    // })

    const [products, setProducts] = useState(data)

    const [userData, setUserData] = useState({
        name: '',
        email: ''
    })

    let [searchText, setSearchText] = useState('')

    let [cartProducts, setCartProducts] = useState(0)

    const handleAddToCart = () => {
        console.log('hello from add to cart');
        setCartProducts(cartProducts + 1)}
    
    
      const handleSearchClick = () => helloworld()// console.log('search clicked')
      const handleOnChange = e => setSearchText(e.target.value)

    const helloworld = () => {console.log('hello world')}

    const filterSearch = item => {
        const lowercased = item.name.toLowerCase()
    
        const searchLower = searchText.toLowerCase()
    
        return lowercased.includes(searchLower)
      }

    return <EshopContext.Provider value={{products, setProducts, 
        userData, setUserData, 
        cartProducts, handleAddToCart,
        searchText, setSearchText, handleSearchClick, handleOnChange,
        filterSearch,
        helloworld}}>
        {children}
    </EshopContext.Provider>
}

