import { addToCart } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux';

const ProductCard = ({data}) => {
    const p = data?.attributes;
    const dispatch = useDispatch();
  return (
    <div className="product d-flex flex-column overflow-hidden">
    <figure className="mb-0 product-media bg-white d-flex justify-content-center align-items-center">
      <span className="product-label label-sale">SALE</span>
      <a href="product.html" className="w-100">
        <Image
          src={p?.thumbnail?.data?.attributes?.url}
          alt="Product image"
          className="product-image"
          width={239}
          height={239}
        />
       
      </a>
      <div
        className="product-countdown bg-light"
        data-until="+55h"
        data-relative="true"
        data-labels-short="true"
      />
      {/* End .product-countdown */}
      {/* <div className="product-action-vertical">
        <a
          href="#"
          className="btn-product-icon text-dark btn-wishlist"
          title="Add to wishlist"
        >
          <span>add to wishlist</span>
        </a>
        <a
          href="popup/quickView.html"
          className="btn-product-icon text-dark btn-quickview"
          title="Quick view"
        >
          <span>Quick view</span>
        </a>
        <a
          href="#"
          className="btn-product-icon text-dark btn-compare"
          title="Compare"
        >
          <span>Compare</span>
        </a>
      </div> */}
    </figure>
    {/* End .product-media bg-white d-flex justify-content-center align-items-center */}
    <div className="product-body pb-3">
      <div className="text-left product-cat font-weight-normal text-light mb-0">
        <a href="#">  {p.category.data.attributes.name}</a>
      </div>
      {/* End .product-cat  */}
      <h3 className="product-title letter-spacing-normal font-size-normal text-left mb-0">
        <a href="product.html">{p.title}</a>
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
        }}
      >
        <span className="text-dark shadow-none">add to cart</span>
      </button>
    </div>
    {/* <div className="product-sold">
      <div className="sold position-relative w-100">
        <div
          className="sold-val position-absolute"
          style={{ width: "80%" }}
        />
        <span className="sold-text font-size-normal second-primary-color">
          Sold: 54
        </span>
      </div>
    </div> */}
  </div>
  )
}

export default ProductCard