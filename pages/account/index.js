import { logout } from "@/store/userSlice";
import withAuth from "@/utils/restrict";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser);
  if (!user) {
    router.push("/account/login");
    return null;
  }
  const dispatch = useDispatch();
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            My Account<span>Welcome! {user?.username}</span>
            <span>{user?.email}</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center p-5">
          {/* End .col-12 */}
          <div className="col-md-8">
            <ul className="nav nav-tabs nav-tabs-bg" id="tabs-1" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="tab-1-tab"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-2-tab"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-3-tab"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  Account Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-4-tab"
                  data-toggle="tab"
                  href="#tab-4"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Logout
                </a>
              </li>
            </ul>
            <div className="tab-content tab-content-border" id="tab-content-1">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="tab-1-tab"
              >
                <p>
                  Hello{" "}
                  <span className="font-weight-normal text-dark">{user?.username}</span>{" "}
                  (not{" "}
                  <span className="font-weight-normal text-dark">{user?.username}</span>?{" "}
                  <button style={{color:'red', fontWeight:600}} onClick={()=>{dispatch(logout())}}>Log out</button>)
                  <br />
                  From your account dashboard you can view your{" "}
                  <a
                    href="#tab-orders"
                    className="tab-trigger-link link-underline"
                  >
                    recent orders
                  </a>
                  , manage your{" "}
                  <a href="#tab-address" className="tab-trigger-link">
                    shipping and billing addresses
                  </a>
                  , and{" "}
                  <a href="#tab-account" className="tab-trigger-link">
                    edit your password and account details
                  </a>
                  .
                </p>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-2"
                role="tabpanel"
                aria-labelledby="tab-2-tab"
              >
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-3"
                role="tabpanel"
                aria-labelledby="tab-3-tab"
              >
                  <div className="row">
    <div className="col-lg-6">
      <div className="card card-dashboard">
        <div className="card-body">
          <h3 className="card-title">Billing Address</h3>
          {/* End .card-title */}
          <p>
            User Name : {user?.username}
            <br />
            User Email: {user?.email}
            <br />
            John str
            <br />
            New York, NY 10001
            <br />
            1-234-987-6543
            <br />
            <a
              href="https://portotheme.com/cdn-cgi/l/email-protection"
              className="__cf_email__"
              data-cfemail="8cf5e3f9fee1ede5e0cce1ede5e0a2efe3e1"
            >
              [email&nbsp;protected]
            </a>
            <br />
            <a href="#">
              Edit <i className="icon-edit" />
            </a>
          </p>
        </div>
        {/* End .card-body */}
      </div>
      {/* End .card-dashboard */}
    </div>
    {/* End .col-lg-6 */}
    <div className="col-lg-6">
      <div className="card card-dashboard">
        <div className="card-body">
          <h3 className="card-title">Shipping Address</h3>
          {/* End .card-title */}
          <p>
            You have not set up this type of address yet.
            <br />
            <a href="#">
              Edit <i className="icon-edit" />
            </a>
          </p>
        </div>
        {/* End .card-body */}
      </div>
      {/* End .card-dashboard */}
    </div>
    {/* End .col-lg-6 */}
  </div>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-4"
                role="tabpanel"
                aria-labelledby="tab-4-tab"
              >
                <p>
                  Quis nobis, adipisci quae aspernatur, nulla suscipit eum.
                  Dolorum, earum. Consectetur pariatur repellat distinctio atque
                  alias excepturi aspernatur nisi accusamus sed molestias ipsa
                  numquam eius, iusto, aliquid, quis aut.
                </p>
              </div>
              {/* .End .tab-pane */}
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

export default withAuth(index);
