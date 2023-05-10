import React from 'react'

const CartProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <a href="#">{cartProduct?.attributes?.title}</a>
    </td>
    <td></td>
    <td></td>


    <td>{cartProduct?.oneQuantityPrice}*{cartProduct?.quantity}={cartProduct?.attributes?.price}BDT</td>
  </tr>
  )
}

export default CartProduct