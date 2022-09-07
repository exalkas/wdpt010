import styled from 'styled-components'

const Input = styled.input`
  
`

function InputComp({value, onChange}) {
    return (
        <Input 
            placeholder='type a city' 
            value = {value}
            onChange={onChange}
        />
    );
}

export default InputComp;