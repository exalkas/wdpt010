import Input from './Input'

export default function RadioGroup({name, items, cb, state}) {
    return (
        <div>
            {
                items.map((item, idx) => (

                    <label key={idx}>
                        {item}
                        <input
                            name={name}
                            type='radio'
                            className = 'mx-[20px]'
                            checked = {state === item}
                            value = {item}
                            onChange={cb}
                        />
                    </label>
                ))
            }
        </div>
    );
}