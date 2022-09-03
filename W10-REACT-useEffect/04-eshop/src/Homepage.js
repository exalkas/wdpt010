import './App.css';
import {useState} from 'react'
import Header from './components/header/Header'
import Card from './components/Card'
import {data} from './01-eshop-data'
import CardContainer from './components/CardContainer'

function App() {

  const [products, setProducts] = useState(data)

  let [searchText, setSearchText] = useState('')

  let [cartProducts, setCartProducts] = useState(0)

  const handleAddToCart = () => {
    console.log('hello from add to cart');
    setCartProducts(cartProducts + 1)}


  const handleSearchClick = () => console.log('search clicked')
  const handleOnChange = e => setSearchText(e.target.value)

  const filterSearch = item => {
    const lowercased = item.name.toLowerCase()

    const searchLower = searchText.toLowerCase()

    return lowercased.includes(searchLower)
  }

  return ( 

  <div className="main">
    <Header 
      counterHeader={cartProducts} 
      headerValue = {searchText}
      headerOnChange = {handleOnChange}
      headerOnClick = {handleSearchClick}
    />

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