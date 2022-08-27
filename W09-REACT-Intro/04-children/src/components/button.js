export default function Button(props) {

    return <button 
        onClick={props.cb} 
        className={props.className}>
            {props.text || 'Send'}
    </button>

}

// With props destructured
export function Button2({cb, className, text}) {

    return <button 
        onClick={cb} 
        className={className}>
            {text || 'Send'}
    </button>

}