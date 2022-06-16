import "./styles.css"
import {CheckoutBills, CheckoutInfo} from "../../components/Checkout"


export default function CheckoutPage() {
  return (
    <div className="wrapper__check">
        <CheckoutInfo/>
        <CheckoutBills/>
    </div>
  )
}
