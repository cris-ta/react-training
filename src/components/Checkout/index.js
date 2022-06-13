import "./styles.css"
import {SubTitle} from "../Title"
import {Input, TextArea} from '../Input'
import { ProductCart } from "../Product";
import Button from "../Button";
function CheckoutInfo(props) {
    return ( 
        <div className="check__info">
            <img alt="logo"/>
            <SubTitle subtitle="Thong tin giao hang"/>
            <form>
                <Input type="text" placeholder="Full name"/>
                <Input type="text" placeholder="Email or phone number"/>
                <Input type="text" placeholder="Your address"/>
                <TextArea placeholder="Comment"/>
            </form>
        </div>
     );
}

function CheckoutBills(props) {
    return ( 
        <div className="bills__detail">
            <ProductCart/>
            <div className="coupon">
                <Input/>
                <Button type="orange" text="Sử dụng"/>
            </div>
            <div>
                <SubTitle subtitle="Phí vận chuyển"/>
            </div>
            <div className="total">
                <SubTitle subtitle="Tổng đơn hàng"/>
                {props.price}
            </div>
        </div>
     );
}

export {CheckoutInfo, CheckoutBills};