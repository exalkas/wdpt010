import { useState } from "react"

export default function Input({text, style}) {
    
    console.log('Component starts')
    let [userName, setUserName] = useState('')

    const handleUserChange = (e) => {
        console.log(`User types in ${text} input`, e.target.value)

        setUserName(e.target.value)
        console.log(`JUST CHANGED username`, userName)
    }
    
    console.log('Component before Rendering')
    return <div>
        {console.log('RENDERED')}
    <input 
        // className="green"
        className={style === 'danger' ? 'red' : 'green'}
        onChange={handleUserChange} 
        type="text" 
        value={userName}
        placeholder={`Type your ${text}`}/>
    </div>
}