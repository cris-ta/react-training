import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import "./styles.css"

function Product(props) {
  return (
    <div className='wrapper__product'>
      <img src={props.img} alt='img-product'/>
      <span className='product__name'>{props.name}</span>
      <div className='product__price'>
        <span className='price__old'>{props.price__old}</span>
        <span className='price__current'>{props.price__current}</span>
      </div>
      <Button type="" text="Add to cart"/>
    </div>
  )
}

function ProductCart(props) {
  return (
    <div className='wrapper__cart-product'>
      <img src={props.img} alt=''/>
      <span className='product__name'>{props.name}</span>
      <div className='total__price'>
        <span className='price'>{props.price}</span>
        <span className='quantity'>{props.quantity}</span>
        <span className='total'>{props.total}</span>
      </div>
    </div>
  )
}

function ProductCollection(props) {
  return ( 
    <div className='wrapper__collection'>
      <Link to="">
        <img src={props.img} alt=""/>
      </Link>
      <div className='collection__product-info'>
        <span className='product__name'>{props.name}</span>
        <span className='product__price'>{props.price}</span>
      </div>
    </div>
   );
}


export {Product, ProductCart, ProductCollection}
