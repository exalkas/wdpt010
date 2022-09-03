import Logo from './Logo'
import Menu from './Menu'
import SearchBox from './SearchBox'
import Cart from './Cart'

export default function Header({counterHeader,headerValue, headerOnChange, headerOnClick}) {

    return <header>
        <Logo />
        <Menu />
        <SearchBox value={headerValue} onChange={headerOnChange} onClick={headerOnClick}/>
        <Cart counter={counterHeader}/>
    </header>
}