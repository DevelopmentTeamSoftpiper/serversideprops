import { removeFromCart } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux'

const CartProduct = ({cartProduct}) => {
    const dispatch = useDispatch();
  return (
    <div className="product">
    <div className="product-cart-details">
      <h4 className="product-title letter-spacing-normal font-size-normal">
        <a href="product.html">
          {cartProduct?.attributes?.title}
        </a>
      </h4>
      <span className="cart-product-info">

        <span className="cart-product-qty">{cartProduct?.quantity}</span>x ${cartProduct?.oneQuantityPrice}
      </span>
    </div>
    {/* End .product-cart-details */}
    <figure className="product-image-container">
      <a href="product.html" className="product-image">
        <Image
          src={cartProduct?.attributes?.image?.data?.[0]?.attributes?.url}
          alt="product"
          width={200}
          height={300}
        />
      </a>
    </figure>
    <a href="#" className="btn-remove" title="Remove Product" onClick={()=>{dispatch(removeFromCart({...cartProduct}))}}>
      <i className="icon-close" />
    </a>
  </div>
  )
}

export default CartProduct