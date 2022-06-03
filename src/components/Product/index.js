import React from 'react'
import Button from '../Button'
import ImageProduct from "../../assets/images/product1.png"
import "./styles.css"

export default function Product(props) {
  return (
    <div className='wrapper__product'>
      <img src={ImageProduct} alt='img-product'/>
      <span className='product__name'>{props.name}</span>
      <div className='product__price'>
        <span className='price__old'>{props.price__old}</span>
        <span className='price__current'>{props.price__current}</span>
      </div>
      <Button type="" text="Add to cart"/>
    </div>
  )
}
