/*eslint-disable */
import { logout } from "@/store/userSlice";
import { fetchDataFromApi, postDataToApi,updateDataToApi } from "@/utils/api";
import withAuth from "@/utils/restrict";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profileInfo, setProfileInfo] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  
  const provider = useSelector((state)=>state.user.provider);


  const getUserInfo = async ()=>{
    if(provider === "strapi"){
      const userInfo = await fetchDataFromApi(
        `/api/profiles?populate=*&[filters][user_id_no][$eq]=${user?.id}`
      );
      setName(userInfo?.data?.[0]?.attributes?.username);
      setEmail(userInfo?.data?.[0]?.attributes?.email);
      setPhone(userInfo?.data?.[0]?.attributes?.phone);
      setAddress(userInfo?.data?.[0]?.attributes?.address);
      setPostalCode(userInfo?.data?.[0]?.attributes?.post_code);
      setCity(userInfo?.data?.[0]?.attributes?.city);
      setCountry(userInfo?.data?.[0]?.attributes?.country);
      setProfileId(userInfo?.data?.[0]?.id);
   
    }else{
      const userInfo = await fetchDataFromApi(
        `/api/profiles?populate=*&[filters][user_id_no][$eq]=${user?.uid}`
      );
      setName(userInfo?.data?.[0]?.attributes?.username);
      setEmail(userInfo?.data?.[0]?.attributes?.email);
      setPhone(userInfo?.data?.[0]?.attributes?.phone);
      setAddress(userInfo?.data?.[0]?.attributes?.address);
      setPostalCode(userInfo?.data?.[0]?.attributes?.post_code);
      setCity(userInfo?.data?.[0]?.attributes?.city);
      setCountry(userInfo?.data?.[0]?.attributes?.country);
      setProfileId(userInfo?.data?.[0]?.id);

    }

 
  }
  useEffect(()=>{
    getUserInfo();
  },[])

  const profile = async () => {
    try {
        const response = await updateDataToApi(`/api/profiles/${profileId}`,
        {"data":{
          "username": name,
          "email": email,
          "phone": phone,
          "address":address,
          "post_code":postalCode,
          "city":city,
          "country":country
        }} );
        toast.success("Profile Edited Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
  
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response);
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
                <ToastContainer/>

      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
          Edit Account Information
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
                  className="nav-link"
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
                  className="nav-link active"
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
               <form onSubmit={profileSubmitHandler}>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Username </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required=""
                        value={name}
                        onChange={(e) => {
                          return setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label>Email </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required=""
                        value={email}
                        onChange={(e) => {
                          return setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <label>Phone </label>
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

export default withAuth(EditProfile);
