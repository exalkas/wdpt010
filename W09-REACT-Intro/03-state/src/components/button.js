import {useState} from 'react'

export default function Button() {

    let [counter, setCounter] = useState(0)
    
    // console.log("🚀 ~ testState", testState)

    // let counter = 0

    const handlePlus = () => {

        setCounter(counter += 1);

        console.log('counter', counter)
        // alert("Now you will login")
    }

    const handleMinus = () => {

        setCounter(counter -= 1);

        console.log('counter', counter)
        // alert("Now you will login")
    }

    const handleRandom = () => {

        setCounter(counter = Math.floor(Math.random() * 10 + 1));

        console.log('counter', counter)
        // alert("Now you will login")
    }

    return <div>
        <button onClick={handlePlus}>Plus</button>
        {counter}
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleRandom}>Random</button>
    </div>
        
}