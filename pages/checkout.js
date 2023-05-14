import CartProduct from "@/components/checkout/CartProduct";
import { emptyCart } from "@/store/cartSlice";
import { fetchDataFromApi, postDataToApi } from "@/utils/api";
import withAuth from "@/utils/restrict";
import { STRAPI_API_TOKEN } from "@/utils/urls";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [profileInfo, setProfileInfo] = useState(null);
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  const getUserInfo = async () => {
    const userInfo = await fetchDataFromApi(
      `/api/users/${user?.id}?populate=*`
    );
    // console.log(userInfo);
    setProfileInfo(userInfo);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const subTotal = useMemo(() => {
    return cartProducts.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartProducts]);
  const productData = cartProducts.map((p) => ({
    id: p?.id,
    title: p?.attributes?.title,
    quantityPrice: p?.oneQuantityPrice,
    quantity: p?.quantity,
    price: p?.attributes?.price,
    category: p?.attributes?.category?.data?.attributes?.name,
    subcategory: p?.attributes?.sub_category?.data?.attributes?.name,
  }));

  const order = async () => {
    try {
      const response = await postDataToApi("/api/orders", {
        data: {
          products: productData,
          user: user?.id,
          name: user?.username,
          email: user?.email,
          phone: profileInfo?.profile?.phone,
          address: profileInfo?.profile?.address,
          city: profileInfo?.profile?.city,
          post_code: profileInfo?.profile?.post_code,
          shipping_cost: shippingCost,
          payment_method:paymentMethod,
          phone_no : phoneNo,
          transaction_id: transactionId,
          subtotal:subTotal,
          total: total,
          sale_status: 'pending',
          payment_status: 'pending',
          delivery_status: 'pending'

        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const orderSubmitHandler = (e) => {
    e.preventDefault();
    order();
    dispatch(emptyCart());
    router.push("/success");

  };

  const [shippings, setShippings] = useState(null);
  const [shippingCost, setShippingCost] = useState(70);

  const shippingCostChangeHandler = (e) => {
    setShippingCost(e.target.value);
  };

  const getShippings = async () => {
    const ships = await fetchDataFromApi("/api/shippings?populate=*");
    // console.log(ships);
    setShippings(ships);
  };

  const [paymentMethods, setPaymentMethods] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

  const getPaymentMethods = async () => {
    const pMethods = await fetchDataFromApi("/api/payment-methods?populate=*");
    console.log(pMethods);
    setPaymentMethods(pMethods);
  };
  const total = parseInt(subTotal) + parseInt(shippingCost);
  // console.log(total);

  useEffect(() => {
    getShippings();
    getPaymentMethods();
  }, []);

  const [phoneNo, setPhoneNo] = useState("");
  const [transactionId, setTransactionId] = useState("");

  if (!user) {
    router.push("/account/login");
    return null;
  }

  return (
    <div className="page-wrapper p-5">
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
              {/* <div className="checkout-discount">
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
          </div> */}
              {/* End .checkout-discount */}

              <div className="row">
                <div className="col-lg-7">
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
                <aside className="col-lg-5">
                  <div className="summary">
                    <h3 className="summary-title">Your Order</h3>
                    {/* End .summary-title */}
                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th></th>
                          <th></th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts?.map((cartProduct) => (
                          <CartProduct
                            key={cartProduct?.id}
                            cartProduct={cartProduct}
                          />
                        ))}

                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td></td>
                          <td></td>
                          <td>${subTotal}</td>
                        </tr>
                        <tr className="summary-shipping">
                          <td>Shipping:</td>
                          <td>&nbsp;</td>
                        </tr>
                        {/* End .summary-subtotal */}
                        {shippings?.data?.map((ship) => (
                          <tr key={ship?.id} className="summary-shipping-row">
                            <td>
                              <div className="form-check ">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="shippingMethod"
                                    value={ship?.attributes?.cost}
                                    style={{
                                      marginTop: ".6rem",
                                      marginLeft: "-2rem",
                                    }}
                                    onChange={shippingCostChangeHandler}
                                    checked={
                                      ship?.attributes?.cost == shippingCost
                                    }
                                  />
                                  {ship?.attributes?.title}
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>BDT {ship?.attributes?.cost}</td>
                          </tr>
                        ))}
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td></td>
                          <td></td>
                          <td>BDT {total}</td>
                        </tr>
                        {/* End .summary-total */}
                      </tbody>
                    </table>
                    {/* End .table table-summary */}
                    <tr className="summary-shipping">
                      <td style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                        Payment Method:
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    {paymentMethods?.data?.map((method) => (
                          <tr key={method?.id} className="summary-shipping-row">
                            <td>
                              <div className="form-check ">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="paymentMethod"
                                    value={method?.attributes?.title}
                                    style={{
                                      marginTop: ".6rem",
                                      marginLeft: "-2rem",
                                    }}
                                    onChange={(e)=>{setPaymentMethod(e.target.value)}}
                                    checked={
                                      method?.attributes?.title == paymentMethod
                                    }
                                  />
                                  <p>{method?.attributes?.title} </p>
                                  <small>{method?.attributes?.description}</small>
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                          
                          </tr>
                        ))}
                    {(paymentMethod === "Bkash" ||
                      paymentMethod === "Rocket" || paymentMethod === "Nagad") && (
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Mobile No"
                            className="form-control"
                            name="phonNo"
                            value={phoneNo}
                            onChange={(e)=>{setPhoneNo(e.target.value)}}
                            style={{ marginTop: ".6rem", marginLeft: "-2rem" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Transaction Id"
                            className="form-control"
                            name="transactionId"
                            value={transactionId}
                            onChange={(e)=>{setTransactionId(e.target.value)}}
                            style={{ marginTop: ".6rem", marginLeft: "-2rem" }}
                          />
                        </div>
                      </div>
                    )}
                    {/* End .accordion */}
                    <button
                      className="btn btn-outline-primary-2 btn-order btn-block mt-2"
                      onClick={orderSubmitHandler}
                    >
                      <span className="btn-text">Place Order</span>
                      <span className="btn-hover-text">
                        Proceed to Checkout
                      </span>
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
  );
};

export default withAuth(checkout);
