import './App.css';
import {useState, useContext} from 'react'
import Header from './components/header/Header'
import Card from './components/Card'
import { EshopContext } from './components/Context';

import CardContainer from './components/CardContainer'

function App() {

  const {globalState} = useContext(EshopContext)


  return ( 

  <div className="main">


    {
      // searchText.length > 0 ? null :

      <>
        <CardContainer 
        title='Best Sellers' 
        max = {3} 
        products={globalState.products.filter(item => item).sort((a, b) => b.sold - a.sold)} 
      />
      
      <CardContainer 
        title='Most Popular' 
        max = {3} 
        products={globalState.products.filter(item => item).sort((a, b) => b.reviews - a.reviews)} 
      />
      </>
    }


    {/* <CardContainer 
      title='All products' 
      max = {0} 
      displayAll={true} 
      products={searchText.length > 0 ? products.filter(filterSearch) : products} 
      handleCart={handleAddToCart}
    /> */}
  </div>
  );
}

export default App;