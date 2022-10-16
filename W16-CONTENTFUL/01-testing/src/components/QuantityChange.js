import {useState} from 'react';

function QuantityChange(props) {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button 
                onClick={e => setCounter(counter + 1)}
                data-testid='plusbutton'
            >alkis</button>
            <span data-testid='counter'>{counter}</span>
            <button 
                data-testid = 'minusbutton'
                onClick={e => setCounter(counter - 1)}>-</button>
        </div>
    );
}

export default QuantityChange;