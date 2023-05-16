import AlertBox from "@/components/elements/AlertBox";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const handleChange = (e)=>{
        setEmail(e.target.value);
    }
    const forgetPassword = async () => {
        try {
          const res = await axios.post("http://localhost:1337/api/auth/forgot-password", {
            email,
     
          });
          setSuccess(true);
          setError(false);
          console.log(res.data);
        } catch (error) {
            setSuccess(false);
            setError(true);
          console.log(error);
         
        }
      };
      const submitHandler = (e) => {
        e.preventDefault();
        forgetPassword();
      };
      console.log(email);
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="index.html">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/account">Account</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              ForgetPassword
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{
          backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <h6>Forget Password</h6>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="register-2"
                  role="tabpanel"
                  aria-labelledby="register-tab-2"
                >
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        placeholder="email"
                          onChange={handleChange}
                          name="email"
                          value={email}
                        className="form-control"
                        id="email"
                        required
                      />
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Submit</span>
                        <i className="icon-long-arrow-right" />
                      </button>
      
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  {success && <AlertBox text="Password Reset Link is sent to your Email" type="success" /> }
                  {error && <AlertBox text="Something went wrong!. Try again" type="danger" /> }

                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .form-tab */}
          </div>
          {/* End .form-box */}
        </div>
        {/* End .container */}
      </div>
      {/* End .login-page section-bg */}
    </main>
  );
};

export default ForgetPassword;
