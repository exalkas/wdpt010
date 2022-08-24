export default function Input({text, style}) {
    
    const handleUserChange = (e) => {
        console.log(`User types in ${text} input`, e.target.value)
    }

    return <input 
        // className="green"
        className={style === 'danger' ? 'red' : 'green'}
        onChange={handleUserChange} 
        type="text" 
        placeholder={`Type your ${text}`}/>
}