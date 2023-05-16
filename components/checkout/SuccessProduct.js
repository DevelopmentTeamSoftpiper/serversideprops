import Link from 'next/link'
import React from 'react'

const SuccessProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <Link href="#">{cartProduct?.title}</Link>
    </td>
    <td>{cartProduct?.quantityPrice} BDT</td>
    <td>{cartProduct?.quantity}</td>


    <td>{cartProduct?.price} BDT</td>
  </tr>
  )
}

export default SuccessProduct