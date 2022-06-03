import Product from "../../components/Product"
import Title from "../../components/Title"
import "./styles.css"

function HomePage(props) {
    return (
        <div className='wrapper'>
            <article className="sale__box">
                <Title title="Flash Sale"/>
                <div className="products">
                    <Product name="Áo Polo Coolmax" price__old="230.000vnđ" price__current="230.000vnđ"/>
                    <Product name="Áo Polo Coolmax" price__old="230.000vnđ" price__current="230.000vnđ"/>
                    <Product name="Áo Polo Coolmax" price__old="230.000vnđ" price__current="230.000vnđ"/>
                    <Product name="Áo Polo Coolmax" price__old="230.000vnđ" price__current="230.000vnđ"/>
                </div>
            </article>
        </div>
    )
}

export default HomePage