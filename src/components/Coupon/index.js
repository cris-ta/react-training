import "./styles.css"

function CouponCircle(props) {
    return (
        <label className="coupon__circle">
            {props.coupon}
        </label>
    )
}

function CouponDefault(props){
    return (
        <label className="coupon__default">
            {props.coupon}
        </label>
    )
}

function Label (props) {
    return (
        <label className="label">
            {props.label}
        </label>
    )
}

export {CouponCircle, CouponDefault, Label}