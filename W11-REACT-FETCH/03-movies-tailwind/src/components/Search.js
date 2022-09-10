import Button from './Button'
import Input from './Input'

function Search({value, onChange, onClick}) {
    return (
        <form onSubmit={onChange}>
            <Input value={value} onChange={onChange} />
            <Button size='lg' onClick={onClick} />
        </form>
    );
}

export default Search;