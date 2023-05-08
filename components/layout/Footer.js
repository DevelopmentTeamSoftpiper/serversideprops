import Image from 'next/image'
import React from 'react'

const Footer = ({siteInfo}) => {
  return (
    <footer
    className="footer footer-2 font-weight-normal second-primary-color"
    style={{ backgroundColor: "#222" }}
  >
    <div className="cta cta-horizontal cta-horizontal-box pt-5 pb-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-4-5col offset-xl-10col">
            <div className="row align-items-center">
              <div className="col-lg-5 cta-txt text-lg-left text-center">
                <h3 className="cta-title text-white my-2 mt-0">
                  Join Our Newsletter
                </h3>
                {/* End .cta-title */}
                <p className="cta-desc font-size-normal second-primary-color font-weight-normal">
                  Subcribe to get information about products and coupons
                </p>
                {/* End .cta-desc font-size-normal */}
              </div>
              {/* End .col-lg-5 */}
              <div className="col-lg-7">
                <form
                  action="#"
                  className="d-flex justify-content-end justify-content-center"
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control mr-0 font-weight-normal"
                      placeholder="Enter your Email Address"
                      aria-label="Email Adress"
                      required=""
                    />
                    <div className="input-group-append">
                      <button className="btn text-uppercase" type="submit">
                        Subscribe
                        <i className="icon-long-arrow-right mr-0" />
                      </button>
                    </div>
                    {/* .End .input-group-append */}
                  </div>
                  {/* .End .input-group */}
                </form>
              </div>
              {/* End .col-lg-7 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .col-xl-8 offset-2 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container-fluid */}
    </div>
    {/* End .cta */}
    <div className="container">
      <hr className="mt-0 mb-0" style={{ borderColor: "#444" }} />
    </div>
    <div className="footer-middle border-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2-5cols">
            <div className="widget widget-about mb-4">
            <Image
              src={siteInfo?.data?.attributes?.logo?.data?.attributes?.url}
              alt="Molla Logo"
              width={105}
              height={25}
            />
              <p className="font-weight-normal second-primary-color">
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                luctus, metus.{" "}
              </p>
              <div className="widget-about-info">
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <span className="widget-about-title text-white">
                      Got Question? Call us 24/7
                    </span>
                    <a href="tel:123456789" className="text-primary">
                      +0123 456 789
                    </a>
                  </div>
                  {/* End .col-sm-6 */}
                  <div className="col-sm-6 col-md-8">
                    <span className="pl-3 widget-about-title text-white">
                      Payment Method
                    </span>
                    <figure className="pl-3 mb-0 footer-payments">
                      <img
                        src="assets/images/payments.png"
                        alt="Payment methods"
                        width={272}
                        height={20}
                      />
                    </figure>
                    {/* End .footer-payments */}
                  </div>
                  {/* End .col-sm-6 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .widget-about-info */}
            </div>
            {/* End .widget about-widget */}
          </div>
          {/* End .col-sm-12 col-lg-3 */}
          <div className="col-sm-4 col-lg-5cols">
            <div className="widget mb-4">
              <h4 className="widget-title text-white">Information</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="about.html">About Molla</a>
                </li>
                <li>
                  <a href="#">How to shop on Molla</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
                <li>
                  <a href="login.html">Log in</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-4 col-lg-3 */}
          <div className="col-sm-4 col-lg-5cols">
            <div className="widget mb-4">
              <h4 className="widget-title text-white">Customer Service</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">Money-back guarantee!</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-4 col-lg-3 */}
          <div className="col-sm-4 col-lg-5cols">
            <div className="widget mb-4">
              <h4 className="widget-title text-white">My Account</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="cart.html">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-64 col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
    {/* End .footer-middle */}
    <div className="footer-bottom font-weight-normal">
      <div className="container">
        <p className="footer-copyright font-weight-normal ml-lg-2 second-primary-color">
          Copyright © 2019 Molla Store. All Rights Reserved.{" "}
        </p>
        {/* End .footer-copyright */}
        <ul className="footer-menu justify-content-center">
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        {/* End .footer-menu */}
        <div className="social-icons social-icons-color justify-content-center">
          <span className="social-label">Social Media</span>
          <a
            href="#"
            className="social-icon social-facebook"
            title="Facebook"
            target="_blank"
          >
            <i className="icon-facebook-f" />
          </a>
          <a
            href="#"
            className="social-icon social-twitter"
            title="Twitter"
            target="_blank"
          >
            <i className="icon-twitter" />
          </a>
          <a
            href="#"
            className="social-icon social-instagram"
            title="Instagram"
            target="_blank"
          >
            <i className="icon-instagram" />
          </a>
          <a
            href="#"
            className="social-icon social-youtube"
            title="Youtube"
            target="_blank"
          >
            <i className="icon-youtube" />
          </a>
          <a
            href="#"
            className="social-icon social-pinterest"
            title="Pinterest"
            target="_blank"
          >
            <i className="icon-pinterest" />
          </a>
        </div>
        {/* End .soial-icons */}
      </div>
      {/* End .container */}
    </div>
    {/* End .footer-bottom */}
  </footer>
  )
}

export default Footer