import {RiDeleteBin2Line} from 'react-icons/ri'

export default function Button(props) {

    return <RiDeleteBin2Line 
        onClick={props.cb} 
        className={props.className}>
            {props.text || 'Send'}
    </RiDeleteBin2Line>

}

// With props destructured
export function Button2({cb, className, text}) {

    return <button 
        onClick={cb} 
        className={className}>
            {text || 'Send'}
    </button>

}