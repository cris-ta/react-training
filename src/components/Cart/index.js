import Button from "../Button";
import { ProductCart } from "../Product";
import { Heading2, SubHeading, SubTitle, Title } from "../Title";

function CartDetail(props) {
  
  return (
      <article className="cart__product">
        <div className="description">
          <Heading2 heading2="GIỎ HÀNG CỦA BẠN" />
          <SubHeading sub__heading ={props.quantity}/>
        </div>
        <ProductCart/>
      </article>
  );
}

function CheckCart(props) {
    return ( 
        <article>
            <div>
                <Heading2 heading2=""/>
            </div>
            <div className="service">
              <ul>
                <li>
                  <Title/>
                  <SubTitle/>
                </li>
                <li>
                  <Title/>
                  <SubTitle/>
                </li>
                <li>
                  <Title/>
                  <SubTitle/>
                </li>
              </ul>
            </div>
        </article>
     );
}

function CartBox(props) {
  return (
    <article className="cart__box">
      <div className="cart__box-product">
        
      </div>
      <div className="cart__box-button">
        <Button type="orange" text="Cart Detail"/>
        <Button type="" text="Back to Shopping"/>
      </div>
    </article>
  )
}

export {CartDetail, CheckCart, CartBox}
