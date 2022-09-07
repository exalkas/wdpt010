import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid black;
    background: transparent;
    color: red;
    font-size:
    ${
        props => props.size === 'lg' ?  '4rem;' :  '2rem;'
    }
`

function ButtonComp({size, onClick}) {
    return (
        <div>
            <Button onClick={onClick} size={size}> Search</Button>
        </div>
    );
}

export default ButtonComp;