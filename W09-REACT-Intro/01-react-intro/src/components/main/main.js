import Card from '../card/card'
import {faker} from '@faker-js/faker'

export default function Main() {

    const handleClick = () => {

        console.log('Hit me has been clicked');
    }

    // this is js
    return <main style={{
        width: '100%',
        height: '400px',
        background: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
        }}>
        {/* this is jsx */}
        <Card name={faker.name.firstName()} address={'berlin'}/>
        <Card name={faker.name.firstName()} address='Sao Paolo'/>
        {/* {
            faker.internet.email()
        }
        {faker.address.city()} */}
        {/* <img src={faker.image.business()} alt=''/> */}
        {/* <p>
            <button onClick={handleClick}>Hit me</button>
        </p> */}
    </main>
}