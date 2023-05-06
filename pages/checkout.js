import CartProduct from '@/components/checkout/CartProduct';
import { postDataToApi } from '@/utils/api';
import { STRAPI_API_TOKEN } from '@/utils/urls';
import axios from 'axios';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const checkout = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const subTotal = useMemo(()=>{
        return cartProducts.reduce((total, val)=>total+val.attributes.price,0)
      },[cartProducts])
    
      const order = async () => {
        try {
          const response = await postDataToApi("api/orders", cartProducts);
         
         
          console.log(response);
       
        } catch (error) {
          console.log(error.response);
         
        }
      };
  const orderSubmitHandler =() =>{
    order();
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
              <div className="col-lg-9">
                <h2 className="checkout-title">Billing Details</h2>
                {/* End .checkout-title */}
                <div className="row">
                  <div className="col-sm-6">
                    <label>First Name *</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6">
                    <label>Last Name *</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
                <label>Company Name (Optional)</label>
                <input type="text" className="form-control" />
                <label>Country *</label>
                <input type="text" className="form-control" required="" />
                <label>Street address *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House number and Street name"
                  required=""
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Appartments, suite, unit etc ..."
                  required=""
                />
                <div className="row">
                  <div className="col-sm-6">
                    <label>Town / City *</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6">
                    <label>State / County *</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
                <div className="row">
                  <div className="col-sm-6">
                    <label>Postcode / ZIP *</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6">
                    <label>Phone *</label>
                    <input type="tel" className="form-control" required="" />
                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
                <label>Email address *</label>
                <input type="email" className="form-control" required="" />
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
              <aside className="col-lg-3">
                <div className="summary">
                  <h3 className="summary-title">Your Order</h3>
                  {/* End .summary-title */}
                  <table className="table table-summary">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartProducts?.map((cartProduct) => (
                    <CartProduct key={cartProduct?.id} cartProduct={cartProduct} />
                    ))}
                   
                     
          
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>${subTotal}</td>
                      </tr>
                      {/* End .summary-subtotal */}
                      <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>$160.0</td>
                      </tr>
                      {/* End .summary-total */}
                    </tbody>
                  </table>
                  {/* End .table table-summary */}
                  <div className="accordion-summary" id="accordion-payment">
                    <div className="card">
                      <div className="card-header" id="heading-1">
                        <h2 className="card-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-1"
                            aria-expanded="true"
                            aria-controls="collapse-1"
                          >
                            Direct bank transfer
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-1"
                        className="collapse show"
                        aria-labelledby="heading-1"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
                    <div className="card">
                      <div className="card-header" id="heading-2">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-2"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                          >
                            Check payments
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-2"
                        className="collapse"
                        aria-labelledby="heading-2"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
                    <div className="card">
                      <div className="card-header" id="heading-3">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-3"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                          >
                            Cash on delivery
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-3"
                        className="collapse"
                        aria-labelledby="heading-3"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Quisque volutpat mattis eros. Lorem ipsum dolor sit
                          amet, consectetuer adipiscing elit. Donec odio.
                          Quisque volutpat mattis eros.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
                    <div className="card">
                      <div className="card-header" id="heading-4">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-4"
                            aria-expanded="false"
                            aria-controls="collapse-4"
                          >
                            PayPal{" "}
                            <small className="float-right paypal-link">
                              What is PayPal?
                            </small>
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-4"
                        className="collapse"
                        aria-labelledby="heading-4"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Nullam malesuada erat ut turpis. Suspendisse urna
                          nibh, viverra non, semper suscipit, posuere a, pede.
                          Donec nec justo eget felis facilisis fermentum.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
                    <div className="card">
                      <div className="card-header" id="heading-5">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-5"
                            aria-expanded="false"
                            aria-controls="collapse-5"
                          >
                            Credit Card (Stripe)
                            <img
                              src="assets/images/payments-summary.png"
                              alt="payments cards"
                            />
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-5"
                        className="collapse"
                        aria-labelledby="heading-5"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          {" "}
                          Donec nec justo eget felis facilisis fermentum.Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                          dolor sit ame.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
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