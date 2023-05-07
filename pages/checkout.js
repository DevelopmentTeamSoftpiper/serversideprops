import CartProduct from '@/components/checkout/CartProduct';
import { emptyCart } from '@/store/cartSlice';
import { fetchDataFromApi, postDataToApi } from '@/utils/api';
import { STRAPI_API_TOKEN } from '@/utils/urls';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const checkout = () => {
  const dispatch = useDispatch();
  const [profileInfo, setProfileInfo]= useState(null);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const getUserInfo = async ()=>{
    const userInfo = await fetchDataFromApi(`/api/users/${user?.id}?populate=*`);
    console.log(userInfo);
    setProfileInfo(userInfo);
    }
    useEffect(()=>{
      getUserInfo();
    },[])
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const subTotal = useMemo(()=>{
        return cartProducts.reduce((total, val)=>total+val.attributes.price,0)
      },[cartProducts])
    const productData = cartProducts.map((p)=>({
      id:p?.id,
      title: p?.attributes?.title,
      quantityPrice: p?.oneQuantityPrice,
      quantity: p?.quantity,
      price:p?.attributes?.price,
      category:p?.attributes?.category?.data?.attributes?.name,
      subcategory:p?.attributes?.sub_category?.data?.attributes?.name
    }))

      const order = async () => {
        try {
          const response = await postDataToApi("/api/orders",
          {"data":{
            "products": productData,
            "user":user?.id,
            "name":user?.username,
            "email":user?.email,
            "phone":profileInfo?.profile?.phone,
            "address":profileInfo?.profile?.address,
            "city":profileInfo?.profile?.city,
            "post_code":profileInfo?.profile?.post_code
          }} );
         
         
          console.log(response);
       
        } catch (error) {
          console.log(error.response);
         
        }
      };
  const orderSubmitHandler =(e) =>{
    e.preventDefault();
    order();
    dispatch(emptyCart());
  }

  return (
    <div className='page-wrapper p-5'>
            <main className="main">
    <div
      className="page-header text-center"
      style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
    >
      <div className="container">
        <h1 className="page-title">
          Checkout<span>Shop</span>
        </h1>
      </div>
      {/* End .container */}
    </div>
    {/* End .page-header */}
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Shop</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Checkout
          </li>
        </ol>
      </div>
      {/* End .container */}
    </nav>
    {/* End .breadcrumb-nav */}
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <div className="checkout-discount">
            <form >
              <input
                type="text"
                className="form-control"
                required=""
                id="checkout-discount-input"
              />
              <label
                htmlFor="checkout-discount-input"
                className="text-truncate"
              >
                Have a coupon? <span>Click here to enter your code</span>
              </label>
            </form>
          </div>
          {/* End .checkout-discount */}
        
            <div className="row">
              <div className="col-lg-6">
                <h2 className="checkout-title">Billing Details</h2>
                {/* End .checkout-title */}
                <div className="row">
                  <div className="col-sm-6">
                    <label> Name</label>
                    <p>{user?.username}</p>
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6">
                    <label>Email</label>
                    <p>{user?.email}</p>

                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
                <label>Phone No</label>
                <p>{profileInfo?.profile?.phone}</p>
              
                <label>Street address *</label>
                <p>{profileInfo?.profile?.address}</p>
         
              
                <div className="row">
                  <div className="col-sm-6">
                    <label>Town / City *</label>
                    <p>{profileInfo?.profile?.city}</p>
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6">
                    <label>Postal Code</label>
                    <p>{profileInfo?.profile?.post_code}</p>
                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
              
                
               
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkout-create-acc"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkout-create-acc"
                  >
                    Create an account?
                  </label>
                </div>
                {/* End .custom-checkbox */}
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkout-diff-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkout-diff-address"
                  >
                    Ship to a different address?
                  </label>
                </div>
                {/* End .custom-checkbox */}
                <label>Order notes (optional)</label>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  defaultValue={""}
                />
              </div>
              {/* End .col-lg-9 */}
              <aside className="col-lg-6">
                <div className="summary">
                  <h3 className="summary-title">Your Order</h3>
                  {/* End .summary-title */}
                  <table className="table table-summary">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartProducts?.map((cartProduct) => (
                    <CartProduct key={cartProduct?.id} cartProduct={cartProduct} />
                    ))}
                   
                     
          
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td></td>
                        <td></td>
                        <td>${subTotal}</td>
                      </tr>
                      {/* End .summary-subtotal */}
                      <tr>
                        <td>Shipping:</td>
                        <td></td>
                        <td></td>
                        <td>Free shipping</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Total:</td>
                        <td></td>
                        <td></td>
                        <td>$160.0</td>
                      </tr>
                      {/* End .summary-total */}
                    </tbody>
                  </table>
                  {/* End .table table-summary */}
                  <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" />
                    Cash on Delivery
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" />
                    BKash
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                      disabled=""
                    />
                    Nagad
                  </label>
                </div>
                  {/* End .accordion */}
                  <button
                    
                    className="btn btn-outline-primary-2 btn-order btn-block"
                    onClick={orderSubmitHandler}
                  >
                    <span className="btn-text">Place Order</span>
                    <span className="btn-hover-text">Proceed to Checkout</span>
                  </button>
                </div>
                {/* End .summary */}
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
       
        </div>
        {/* End .container */}
      </div>
      {/* End .checkout */}
    </div>
    {/* End .page-content */}
  </main>
    </div>
  )
}

export default checkout