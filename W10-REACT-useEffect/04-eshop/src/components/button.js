import {RiDeleteBin2Line} from 'react-icons/ri'

export default function Button(props) {

    return <RiDeleteBin2Line 
        onClick={props.cb} 
        className={props.className}>
            {props.text || 'Send'}
    </RiDeleteBin2Line>

}

// With props destructured
export function Button2({onclick, className, text}) {

    return <button 
        onClick={onclick} 
        className={className}>
            {text || 'Send'}
    </button>

}