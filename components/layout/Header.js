import React, { useState } from 'react'
import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';
import AuthModal from '../auth/AuthModal';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/userSlice';
import Search from './Search';

const Header = ({siteInfo}) => {
  // console.log(siteInfo);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = ()=>{
    setShowMenu(!showMenu);
  }
  const menuCloseHandler = (data)=>{
    setShowMenu(data.closeMenu);
  }
  return (
    <>
    <header className="header header-intro-clearance header-26">
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:#" className="font-weight-normal">
            <i className="icon-phone h6 second-primary-color" />
            Call: {siteInfo?.data?.attributes?.phone}
          </a>
        </div>
        {/* End .header-left */}
        <div className="header-right font-weight-normal">
          <ul className="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
     
                <li>
                  <div className="header-dropdown">
                    <a href="#">Account</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <Link href="/account">Account Details</Link>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#"  onClick={() => {
                    dispatch(logout());
                  }}>Logout</a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                </li>
                <li>
                  <a href="#signin-modal" data-toggle="modal">
                    Sign in / Sign up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* End .top-menu */}
        </div>
        {/* End .header-right */}
      </div>
      {/* End .container */}
    </div>
    {/* End .header-top */}
    <div className="header-middle">
      <div className="container">
        <div className="header-left">
          <button className="mobile-menu-toggler" onClick={showMenuHandler}>
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <Link href="/" className="logo">
            <Image
              src={siteInfo?.data?.attributes?.logo?.data?.attributes?.url}
              alt="safefoods Logo"
              width={105}
              height={25}
            />
          </Link>
        </div>
        {/* End .header-left */}
        <Search/>
        <div className="header-right">
          <div className="header-dropdown-link">

        <Cart/>
  
          </div>
        </div>
        {/* End .header-right */}
      </div>
      {/* End .container */}
    </div>
    {/* End .header-middle */}
    <div className="header-bottom sticky-header">
      <div className="container">
        <div className="header-center">
          <nav className="main-nav">
            <ul className="menu sf-arrows">
              <li className="megamenu-container active">
                <Link href="/">
                  Home
                </Link>

              </li>
              <li>
                <Link href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/private-policy">
                  Private Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
       
     
              <li>
                <a href="blog.html" className="sf-with-ul">
                  Blog
                </a>
                <ul>
                  <li>
                    <a href="blog.html">Classic</a>
                  </li>
                  <li>
                    <a href="blog-listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-4cols.html">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="blog-mask-masonry.html">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
        
            </ul>
            {/* End .menu */}
          </nav>
          {/* End .main-nav */}
        </div>
        {/* End .header-center */}
        <div className="header-right">
          <i className="la la-lightbulb-o" />
          <p className="text-dark">Clearance Up to 30% Off</p>
        </div>
      </div>
      {/* End .container */}
    </div>
    {/* End .header-bottom */}
  </header>
  <MobileMenuOverlay showMenu ={showMenu} menuCloseHandler = {menuCloseHandler} />
  <MobileMenuContainer showMenu ={showMenu}  menuCloseHandler = {menuCloseHandler} />
  <AuthModal/>
  </>
  )
}

export default Header