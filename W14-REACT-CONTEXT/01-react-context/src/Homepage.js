import './App.css';
import {useState, useContext} from 'react'
import Header from './components/header/Header'
import Card from './components/Card'
import { EshopContext } from './components/Context';

import CardContainer from './components/CardContainer'

function App() {

  // const [products, setProducts] = useState(data)

  const {products, filterSearch, searchText, handleAddToCart} = useContext(EshopContext)


  return ( 

  <div className="main">


    {
      searchText.length > 0 ? null :

      <>
        <CardContainer 
        title='Best Sellers' 
        max = {3} 
        products={products.filter(item => item).sort((a, b) => b.sold - a.sold)} 
        handleCart={handleAddToCart}
      />
      
      <CardContainer 
        title='Most Popular' 
        max = {3} 
        products={products.filter(item => item).sort((a, b) => b.reviews - a.reviews)} 
        handleCart={handleAddToCart}
      />
      </>
    }


    <CardContainer 
      title='All products' 
      max = {0} 
      displayAll={true} 
      products={searchText.length > 0 ? products.filter(filterSearch) : products} 
      handleCart={handleAddToCart}
    />
  </div>
  );
}

export default App;