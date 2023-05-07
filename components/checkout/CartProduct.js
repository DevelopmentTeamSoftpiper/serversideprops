import React from 'react'

const CartProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <a href="#">{cartProduct?.attributes?.title}</a>
    </td>
    <td>
      <a href="#">{cartProduct?.oneQuantityPrice}</a>
    </td>
    <td>
      <a href="#">{cartProduct?.quantity}</a>
    </td>
    <td>${cartProduct?.attributes?.price}</td>
  </tr>
  )
}

export default CartProduct