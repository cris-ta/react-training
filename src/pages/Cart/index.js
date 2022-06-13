import "./styles.css"
import Button from "../../components/Button";
import { ProductCart } from "../../components/Product";
import { Heading2, SubHeading, SubTitle, Title } from "../../components/Title";

function CartPage(props) {
  return ( 
    <div className="wrapper__cart">
      <article className="cart__product">
        <div className="cart__product-title">
          <Heading2 heading2="GIỎ HÀNG CỦA BẠN"/>
          <SubHeading subheading="(Có 1 sản phẩm trong giỏ hàng)"/>
        </div>
        <div className="cart__product-list">
          <ProductCart/>
          <div>
            <Button text="-"/>
            <span>{props.quantity}</span>
            <Button text="+"/>
          </div>
        </div>
      </article>
      <article className="check__details">
        <div className="check__details-box">
          <Title title="TÓM TẮT ĐƠN HÀNG"/>
          <SubHeading subheading="Chưa bao gồm phí vận chuyển:"/>
          <SubHeading subheading="Tổng tiền:"/> {props.price}
          <SubTitle subtitle="Bạn có thể nhập mã giảm giá ở trang thanh toán"/>
          <Button text="Tiến hành đặt hàng"/>
          <Button text="Tiếp tục mua hàng"/>
        </div>
      </article>
    </div>
   );
}

export default CartPage;
