import React from 'react'

const SuccessProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <a href="#">{cartProduct?.title}</a>
    </td>
    <td>{cartProduct?.quantityPrice} BDT</td>
    <td>{cartProduct?.quantity}</td>


    <td>{cartProduct?.price} BDT</td>
  </tr>
  )
}

export default SuccessProduct