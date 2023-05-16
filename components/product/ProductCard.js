import { addToCart } from '@/store/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

const ProductCard = ({data, showToastMsg}) => {
    const p = data?.attributes;
    const dispatch = useDispatch();
  return (
    <div className="product d-flex flex-column overflow-hidden">
    <figure className="mb-0 product-media bg-white d-flex justify-content-center align-items-center">
      <span className="product-label label-sale">SALE</span>
      <Link href={`/product/${p?.slug}`} className="w-100">
        <Image
          src={p?.thumbnail?.data?.attributes?.url}
          alt="Product image"
          className="product-image"
          width={239}
          height={239}
        />
       
      </Link>

    </figure>
    

    <div className="product-body pb-3">
      <div className="text-left product-cat font-weight-normal text-light mb-0">
        <Link href="#">  {p?.category?.data?.attributes?.name}</Link>
      </div>
      {/* End .product-cat  */}
      <h3 className="product-title letter-spacing-normal font-size-normal text-left mb-0">
      <Link href={`/product/${p.slug}`}>
        {
           p.title.length > 20 ? <span> {p?.title?.substring(0,20)}... </span>
            : <span> {p?.title} </span>
            }
      </Link>

      </h3>
      {/* End .product-title letter-spacing-normal font-size-normal */}
      <div className="product-price mb-1">
        <div className="new-price">${p.price}</div>
        <div className="old-price font-size-normal font-weight-normal">
          ${p.original_price}
        </div>
      </div>
      {/* End .product-price */}

    </div>
    <div className="product-action position-relative visible">
      <button
        className="btn-product btn-cart text-uppercase text-dark text-decoration-none"
        onClick={()=>{
          dispatch(addToCart({
            ...data,
            oneQuantityPrice: p?.price
          }));
          showToastMsg({
            msg: `${p?.title} is added to the cart`
          })

        }}
      >
        <span className="text-dark shadow-none">add to cart</span>
      </button>
    </div>
  </div>
  )
}

export default ProductCard