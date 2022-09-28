import { createContext, useReducer } from "react"
import {data} from '../01-eshop-data'

export const EshopContext = createContext()

export default function Context({children}) {

  const reducer = (state, action) => {

    switch (action.type) {

      case 'addProduct':
        return {...state, products: [...state.products, action.payload]}
      case 'deleteProduct':

        const oldProducts = [...state.products]

        oldProducts.splice(action.payload, 1)

        return {...state, products: oldProducts}
      
      case 'editProduct':

        const oldEditProducts = [...state.products]

        oldEditProducts[action.payload.idx] = {...action.payload.product}

        return {...state, products: oldEditProducts}
      case 'addToCart':

        return {...state, cart: [...state.cart, action.payload]}
      case 'deleteFromCart':
          const oldCartProducts = [...state.cart]

          oldCartProducts.splice(action.payload, 1)

        return {...state, cart: oldCartProducts}
      default: 
        return
    }
  }

// syntax is like useState = returns an array with a variable (the state) and a function to update the state
// the useReducer hook needs the reducer funtion  and the initial state
// const [globalState, setGlobalState]
  const [globalState, dispatchState] = useReducer(reducer, {
    products: data,
    user: {
      name: '',
      email: ''
    },
    cart: []
   }) 

   console.log('the global state is', globalState)

  return <EshopContext.Provider value={{products: globalState.products, cart: globalState.cart, globalState, dispatchState}}>
    {children}
  </EshopContext.Provider>
}