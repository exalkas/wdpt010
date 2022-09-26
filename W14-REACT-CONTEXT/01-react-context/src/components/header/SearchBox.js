import {BiSearchAlt} from 'react-icons/bi'

export default function SearchBox({value, onChange, onClick}) {
    return <div className='searchbox'>
        <input type="text" placeholder='type your search' value={value} onChange={onChange} />
        <BiSearchAlt className='icon' onClick={onClick}/>
    </div>
}