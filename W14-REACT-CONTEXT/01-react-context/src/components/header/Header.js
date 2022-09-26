import Logo from './Logo'
import Menu from './Menu'
import SearchBox from './SearchBox'
import Cart from './Cart'
import { useContext } from 'react'
import { EshopContext } from '../Context'

export default function Header() {

    const {cartProducts, searchText, handleOnChange, handleSearchClick} = useContext(EshopContext)

    return <header>
        <Logo />
        <Menu />
        <SearchBox value={searchText} onChange={handleOnChange} onClick={handleSearchClick}/>
        <Cart counter={cartProducts}/>
    </header>
}