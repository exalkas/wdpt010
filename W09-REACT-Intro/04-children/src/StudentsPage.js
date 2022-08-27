import { useState } from "react"
import Card from './components/Card'

const students = [
    {name: 'john', age: 20, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'peter', age: 10, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'jim', age: 30, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'shir', age: 30, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'andrea', age: 40, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'sadaf', age: 33, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'oktay', age: 44, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'julian', age: 11, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'carlos', age: 22, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
    {name: 'patricia', age: 34, address: {
        city: 'berlin',
        street: 'avc',
        number: 20
    }},
]

export default function Students() {

    const [studentsArray, setStudentsArray] = useState(students)

    const handleDelete = () => {console.log('delete pressed')}

    return <div>
        <ul>
            {
                // studentsArray.map((item, idx) => <li key={idx}>Name: {item.name} Age: {item.age} City: {item.address.city}</li>)
                studentsArray.map((item, idx) => <Card key={idx }student={item} handleDelete={handleDelete}/>
            )}
        </ul>
    </div>
}