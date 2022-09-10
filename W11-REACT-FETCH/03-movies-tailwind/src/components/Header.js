import Input from './Input'
import Button from './Button'

function Header({onClick, onChange, value}) {
    return (
        <header className='flex w-full 
            h-[100px] bg-zinc-400 items-center
            justify-center
            lg:bg-green-500
            alkis
            '>
            <Input 
                placeholder='type a movie title'
                className='h-[40px] w-[200px] p-[10px]'
                onChange={onChange}
                value={value}
            />
            <Button 
                className = 'w-[40px] h-[40px] hover:bg-violet-600'
                onClick= {onClick}
                text='Go'
            />
        </header>
    );
}

export default Header;