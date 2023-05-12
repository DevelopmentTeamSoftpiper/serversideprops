import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = ({siteInfo}) => {
  return (
    <footer
    className="footer footer-2 font-weight-normal second-primary-color"
    style={{ backgroundColor: "#222" }}
  >
    
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
            
             <ul className="widget-list mt-3">
                <li>
                  <div className='d-flex items-center'>
                    <span> 
                      <FaMapMarkerAlt className='text-3xl mr-3' />
                    </span>
                    <span> Shop #33, Road #5, Block-B, Banasree, Dhaka </span>
                  </div>
                </li>
                <li>
                  <div className='d-flex items-center'>
                    <span> 
                    <MdCall className='text-3xl mr-3' />
                    </span> 
                    <span> +8801730593754 </span>
                  </div>
                </li>
                <li>
                  <div className='d-flex items-center'>
                    <span> 
                      <AiOutlineMail className='text-3xl mr-3' />
                    </span> 
                    <span> safefoods.info@gmail.com </span>
                  </div>
                </li>
                
              </ul>
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
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/blog">Latest Post</Link>
                </li>
                <li>
                  <Link href="/shop">Selling Tips</Link>
                </li>
                <li>
                 <Link href="/shop">Advertising</Link>
                </li>
                <li>
                <Link href="/about">Contact Us</Link>
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
                  <Link href="#">Payment Methods</Link>
                </li>
                <li>
                  <Link href="#">Money-back guarantee!</Link>
                </li>
                <li>
                  <Link href="/returns-refund">Returns</Link>
                </li>
                <li>
                  <Link href="/shop">Shipping</Link>
                </li>
                <li>
                    <Link href="/terms-and-conditions">Terms and conditions</Link>
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
                  <Link href="/account/login">Sign In</Link>
                </li>
                <li>
                  <Link href="/cart">View Cart</Link>
                </li>
                <li>
                  <Link href="/wishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link href="/account">Track My Order</Link>
                </li>
                <li>
                  <Link href="#">Help</Link>
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
          Copyright © 2023 SOFTPIPER  
        </p>
        {/* End .footer-copyright */}
        <div className="col-sm-6 d-flex items-center col-md-6">
              <span className="pl-3 widget-about-title text-white">
                Payment Method
              </span>
              <figure className="pl-3 mb-0 footer-payments">
                <Image
                  src="/assets/images/payments.png"
                  alt="Payment methods"
                  width={272}
                  height={20}
                />
              </figure>
        </div>
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