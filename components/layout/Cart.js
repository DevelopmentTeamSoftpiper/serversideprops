import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../product/CartProduct';
import Link from 'next/link';

const Cart = () => {

    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const subTotal = useMemo(()=>{
      return cartProducts.reduce((total, val)=>total+val.attributes.price,0)
    },[cartProducts])
    
  return (
    <div className="dropdown cart-dropdown">
    <Link
      href="#"
      className="dropdown-toggle"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      data-display="static"
    >
      <div className="icon">
        <i className="icon-shopping-cart" />
        <span className="cart-count">{cartProducts.length}</span>
      </div>
      <p>Cart</p>
    </Link>
    <div className="dropdown-menu dropdown-menu-right">
      <div className="dropdown-cart-products">
        {cartProducts?.map((product)=>
        <CartProduct key={product?.id} cartProduct = {product}/>
        )}
        {/* End .product */}

      </div>
      {/* End .cart-product */}
      <div className="dropdown-cart-total">
        <span>Total</span>
        <span className="cart-total-price">${subTotal}</span>
      </div>
      {/* End .dropdown-cart-total */}
      <div className="dropdown-cart-action">
        <Link href="/cart" className="btn btn-primary">
          View Cart
        </Link>
        <Link href="/checkout" className="btn btn-outline-primary-2">
          <span>Checkout</span>
          <i className="icon-long-arrow-right" />
        </Link>
      </div>
      {/* End .dropdown-cart-total */}
    </div>
    {/* End .dropdown-menu */}
  </div>
  )
}

export default Cart