import React from 'react'
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { removeFromCart } from '@/store/cartSlice';
import { updateCart } from '@/store/cartSlice';
const CartItem = ({cartProduct}) => {
  const dispatch = useDispatch();
  const updateCartItem = (e, key)=>{
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: cartProduct?.id    
    }
    dispatch(updateCart(payload));
  }

  return (
    <tr key={cartProduct?.id}>
    <td className="product-col">
      <div className="product">
        <figure className="product-media">
          <a href="#">
            <Image
              src={
                cartProduct?.attributes?.image?.data?.[0]
                  ?.attributes?.url
              }
              alt="product"
              width={200}
              height={300}
            />
          </a>
        </figure>
        <h3 className="product-title">
          <a href="#">{cartProduct?.attributes?.title}</a>
        </h3>
        {/* End .product-title */}
      </div>
      {/* End .product */}
    </td>
    <td className="price-col">
      ${cartProduct?.oneQuantityPrice}
    </td>
    <td className="quantity-col">
      <div className="cart-product-quantity">
        <input
          type="number"
          className="form-control"
          defaultValue={cartProduct?.quantity}
          min={1}
          max={10}
          step={1}
          data-decimals={0}
          required=""
          onChange={(e)=> updateCartItem(e, "quantity")}
        />
      </div>
      {/* End .cart-product-quantity */}
    </td>
    <td className="total-col">${cartProduct?.attributes?.price}</td>
    <td className="remove-col">
      <button className="btn-remove" onClick={()=>{dispatch(removeFromCart({...cartProduct}))}}>
        <i className="icon-close" />
      </button>
    </td>
  </tr>
  )
}

export default CartItem