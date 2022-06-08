import { useEffect, useState } from "react"
import Product from "../../components/Product"
import Title from "../../components/Title"
import "./styles.css"

function HomePage(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setProducts(json)
        })
    },[])

    return (
        <div className='wrapper'>
            <article className="sale__box">
                <Title title="Flash Sale"/>
                <div className="products">
                    {
                    products.length > 0  &&
                    products.map ((p,index) => <Product key={index} name={p.title} img={p.image} price__old={p.price} price__current={p.price}/>)
                    }
                </div>
            </article>
        </div>
    )
}

export default HomePage