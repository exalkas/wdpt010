import  './card.css'

export default function Card({name, address}) {

    return <div className='card'>
        {`Hello ${name} from ${address}`}
    </div>
}