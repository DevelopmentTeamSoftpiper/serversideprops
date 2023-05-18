/*eslint-disable */
import { logout } from "@/store/userSlice";
import { fetchDataFromApi, postDataToApi, updateDataToApi } from "@/utils/api";
import withAuth from "@/utils/restrict";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const provider = useSelector((state)=>state.user.provider);

  const [orders, setOrders] = useState(null);

  const getOrders = async () => {
    if(provider === "strapi"){
      const orderList = await fetchDataFromApi(
        `/api/orders?populate=*&[filters][user_id_no][$eq]=${user?.id}`
      );
    setOrders(orderList);

    }else{
      const orderList = await fetchDataFromApi(
        `/api/orders?populate=*&[filters][user_id_no][$eq]=${user?.uid}`
      );
    setOrders(orderList);

    }

  };
  useEffect(() => {
    getOrders();
  }, []);

  // console.log(orders);
  if (!user) {
    router.push("/account/login");
    return null;
  }

  const logOut = async () => {
    dispatch(logout());
    if(provider === "strapi"){
      await signOut(auth);
    }
    toast.success("Sign out successfully");
  };

  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            My Account (Orders)
           
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center p-5">
          {/* End .col-12 */}
          <div className="col-md-10">
            <ul className="nav nav-tabs nav-tabs-bg" id="tabs-1" role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  id="tab-1-tab"
                  data-toggle="tab"
                  href="/account"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  id="tab-2-tab"
                  data-toggle="tab"
                  href="/account/orders"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  id="tab-3-tab"
                  data-toggle="tab"
                  href="/account/details"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  Account Details
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="tab-4-tab"
                  data-toggle="tab"
                  href="/account/edit-profile"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Edit Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="tab-5-tab"
                  data-toggle="tab"
                  href="#tab-5"
                  role="tab"
                  aria-controls="tab-5"
                  aria-selected="false"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
            <div className="tab-content tab-content-border" id="tab-content-1">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="tab-1-tab"
              >
                <div className="row p-5 ">
                  {orders?.data?.map((order, index) => (
                    <div className="col-md-6">
                      <div className="card p-3 m-2" style={{border: "2px dotted black"}}>
                        <div className="card-body">
                          <div className="d-flex justify-between">
                            <h5 className="card-title">
                              {" "}
                              Order Id: {order?.id}
                            </h5>
                            <h6 className="card-subtitle mb-2" 
                             >
                             <span>Order Status:</span>
                              <span style={{color: order?.attributes?.delivery_status === "pending" ? "red" : "green" }}> {order?.attributes?.delivery_status}</span>
                            </h6>
                          </div>
                          <p>Order Date: {new Date(order?.attributes?.updatedAt).toLocaleDateString()}</p>
                          <div className="d-flex justify-between">
                            <h6>
                              {" "}
                              BDT {order?.attributes?.total}
                            </h6>
                          
                          </div>
                          <div className="d-flex justify-between">
                          <button
                            type="button"
                            style={{color:'green',fontWeight:600, border:"2px solid black", padding: "2px", borderRadius: "5px"}}
                            data-toggle="modal"
                            data-target={`#exampleModal-${order?.id}`}
                          >
                             Details
                          </button>
                          <div
                            className="modal fade"
                            id={`exampleModal-${order?.id}`}
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Order Id: {order?.id}
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body p-5">
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
                                     {order?.attributes?.products?.map((product)=>(
                                       <tr className="summary-subtotal">
                                       <td>{product?.title}</td>
                                       <td>{product?.quantityPrice}</td>
                                       <td>{product?.quantity}</td>
                                       <td>{product?.price} BDT</td>
                                     </tr>
                                     ))}

                                      <tr className="summary-subtotal">
                                        <td>Subtotal:</td>
                                        <td></td>
                                        <td></td>
                                        <td> BDT {order?.attributes?.subtotal}</td>
                                      </tr>
                                      {/* End .summary-subtotal */}
                                      <tr>
                                        <td>Shipping:</td>
                                        <td></td>
                                        <td></td>
                                        <td>{order?.attributes?.shipping_cost} BDT</td>
                                      </tr>
                                      <tr className="summary-total">
                                        <td>Total:</td>
                                        <td></td>
                                        <td></td>
                                        <td> BDT {order?.attributes?.total}</td>
                                      </tr>
                                      {/* End .summary-total */}
                                    </tbody>
                                  </table>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                   
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <a href="#" className="card-link">
                            Another link
                          </a> */}
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* End .summary-total */}
              </div>
            </div>
            {/* End .tab-content */}
          </div>
          {/* End .col-md-6 */}

          {/* End .col-md-6 */}
        </div>
      </div>
    </main>
  );
};

export default withAuth(Orders);
