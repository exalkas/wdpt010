import Card from "./Card"

export default function Container({title, products, handleCart, max, displayAll}) {

    return <div className="wrapper">
        <h3>{title}</h3>
        <div className='container'>
            {
                products.map((item, idx) => {
                
                if (idx < max || displayAll) return <Card key={idx} product={item} cb={handleCart}/>
                
            }) 
            }
        </div>
    </div>
}