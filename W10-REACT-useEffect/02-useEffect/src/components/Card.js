import Button from './button'

export default function Card({student, handleDelete}) {

    const {name, age, address} = student

    const {city, number, street} = address

    return <div>
        <p>
            {name} {age} {city}
            {number} {street}
            <Button 
            text='delete' 
            cb={handleDelete}
            />
        </p>
    </div>
}