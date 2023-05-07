import { logout } from "@/store/userSlice";
import { fetchDataFromApi, postDataToApi,updateDataToApi } from "@/utils/api";
import withAuth from "@/utils/restrict";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profileId, setProfileId] = useState(null);
  const [profileInfo, setProfileInfo] = useState(null);
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  const getUserInfo = async ()=>{
  const userInfo = await fetchDataFromApi(`/api/users/${user?.id}?populate=*`);
  console.log(userInfo);
  setPhone(userInfo?.profile?.phone);
  setAddress(userInfo?.profile?.address);
  setPostalCode(userInfo?.profile?.post_code);
  setCity(userInfo?.profile?.city);
  setCountry(userInfo?.profile?.country);
  setProfileId(userInfo?.profile?.id);
  setProfileInfo(userInfo);
  }
  useEffect(()=>{
    getUserInfo();
  },[])

  const profile = async () => {
    try {
      if(!profileId){
        const response = await postDataToApi("/api/profiles",
        {"data":{
          "user":user?.id,
          "phone": phone,
          "address":address,
          "post_code":postalCode,
          "city":city,
          "country":country
        }} );
        console.log(response);
      }else{
        const response = await updateDataToApi(`/api/profiles/${profileId}`,
        {"data":{
          "user":user?.id,
          "phone": phone,
          "address":address,
          "post_code":postalCode,
          "city":city,
          "country":country
        }} );
        console.log(response);
      }

   
    } catch (error) {
      console.log(error);
     
    }
  };


  const profileSubmitHandler = (e) => {
    e.preventDefault();
    profile();
  };



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
          <div className="col-md-10">
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
                 Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-5-tab"
                  data-toggle="tab"
                  href="#tab-5"
                  role="tab"
                  aria-controls="tab-5"
                  aria-selected="false"
                  onClick={() => {
                    dispatch(logout());
                  }}
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
                  <span className="font-weight-normal text-dark">
                    {user?.username}
                  </span>{" "}
                  (not{" "}
                  <span className="font-weight-normal text-dark">
                    {user?.username}
                  </span>
                  ?{" "}
                  <button
                    style={{ color: "red", fontWeight: 600 }}
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Log out
                  </button>
                  )
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
                          Name : {user?.username}
                          <br />
                          Email: {user?.email}
                          <br />
                          Phone: {phone} 
                          <br />
                   
       
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
                         
                          {!profileInfo?.profile?.address && <p> You have not set up this type of address yet.</p> }
                          <br />
                          {profileInfo?.profile?.address &&
                          <>
                          <p>{profileInfo?.profile?.address}</p>
                          <p>{profileInfo?.profile?.city}, {profileInfo?.profile?.post_code},</p>
                          <p>{profileInfo?.profile?.country}</p>

                          
                          </>
                      
                            }
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
                <form onSubmit={profileSubmitHandler}>
                  <div className="row">
                    <div className="col-sm-12">
                      <label>Mobile No </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        required=""
                        value={phone}
                        onChange={(e) => {
                          return setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <label>Address </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    required=""
                    value={address}
                    onChange={(e) => {
                      return setAddress(e.target.value);
                    }}
                  />
                  <div className="row">
                    <div className="col-md-4">
                      <label>Postal Code </label>
                      <input
                        type="text"
                        name="postal_code"
                        className="form-control"
                        required=""
                        value={postalCode}
                        onChange={(e) => {
                          return setPostalCode(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>City </label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        required=""
                        value={city}
                        onChange={(e) => {
                          return setCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Country </label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        required=""
                        value={country}
                        onChange={(e) => {
                          return setCountry(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-outline-primary-2">
                    <span>SAVE CHANGES</span>
                    <i className="icon-long-arrow-right" />
                  </button>
                </form>
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
