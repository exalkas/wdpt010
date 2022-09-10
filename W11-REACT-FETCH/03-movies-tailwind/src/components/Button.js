
function ButtonComp(props) {
    return (
        <div>
            <button {...props}>{props.text}</button>
        </div>
    );
}

export default ButtonComp;