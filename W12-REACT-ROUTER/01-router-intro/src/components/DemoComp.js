
function DemoComp(props) { // shir or props is an OBJECT => key: value
    return (
        <div>
            {
                console.log(props)
            }
            {props.shir}
            
        </div>
    );
}

export default DemoComp;