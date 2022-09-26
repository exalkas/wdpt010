/**
 * Controlled Input = its value comes
 * from a state
 */

export default function Input(props) {

    return <input 
        value={props.value} 
        placeholder={props.text}
        onChange={props.cb}
    />
}