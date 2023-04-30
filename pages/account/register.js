import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const register = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    response: "",
    buttonText: "sign up",
  });
  const { username, email, password, response, buttonText } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const signup = async () => {
    try {
      setValues({ ...values, buttonText: "Singing Up" });
      const response = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        { username, email, password }
      );
      setValues({
        ...values,
        username: "",
        email: "",
        password: "",
        buttonText: "sign up",
      });
      console.log(response);
      router.push("/account/email-verification");
    } catch (error) {
      console.log(error.response);
      setValues({
        ...values,
        response: error.response,
        buttonText: "sign up",
      });
    }
  };
  console.log(values);

  const submitHandler = (e) => {
    e.preventDefault();
    signup();
  };
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Login
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>

      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{
          backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <h6>Register</h6>
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>{buttonText}</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy-2"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy-2"
                        >
                          I agree to the <a href="#">privacy policy</a> *
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  {/* <div className="form-choice">
                  <p className="text-center">or sign in with</p>
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="#" className="btn btn-login btn-g">
                        <i className="icon-google" />
                        Login With Google
                      </a>
                    </div>
                 
                    <div className="col-sm-6">
                      <a href="#" className="btn btn-login  btn-f">
                        <i className="icon-facebook-f" />
                        Login With Facebook
                      </a>
                    </div>
                  
                  </div>
               
                </div> */}
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

export default register;
