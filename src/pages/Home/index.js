import Product from "../../components/Product"
import Title from "../../components/Title"
import "./styles.css"

function HomePage(props) {
    const products = fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
    return (
        <div className='wrapper'>
            <article className="sale__box">
                <Title title="Flash Sale"/>
                <div className="products">
                    {products.map((product) => {
                        return(
                            <Product key={product.id} name={product.title} price__old={product.price} price__current={product.price}/>
                        )
                    })}
                    
                </div>
            </article>
        </div>
    )
}

export default HomePage