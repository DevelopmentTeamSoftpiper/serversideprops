import React, { useState } from 'react'
import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';
import AuthModal from '../auth/AuthModal';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/userSlice';

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
        <div className="header-center">
          <div className="header-search header-search-visible header-search-no-radius">
            <a href="#" className="search-toggle" role="button">
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper search-wrapper-wide">
                <div className="select-custom">
                  <select id="cat" name="cat">
                    <option value="">All Departments</option>
                    <option value={1}>Fashion</option>
                    <option value={2}>- Women</option>
                    <option value={3}>- Men</option>
                    <option value={4}>- Jewellery</option>
                    <option value={5}>- Kids Fashion</option>
                    <option value={6}>Electronics</option>
                    <option value={7}>- Smart TVs</option>
                    <option value={8}>- Cameras</option>
                    <option value={9}>- Games</option>
                    <option value={10}>Home &amp; Garden</option>
                    <option value={11}>Motors</option>
                    <option value={12}>- Cars and Trucks</option>
                    <option value={15}>- Boats</option>
                    <option value={16}>- Auto Tools &amp; Supplies</option>
                  </select>
                </div>
                {/* End .select-custom */}
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search product ..."
                  required=""
                />
                <button className="btn btn-primary" type="submit">
                  <i className="icon-search" />
                </button>
              </div>
              {/* End .header-search-wrapper */}
            </form>
          </div>
          {/* End .header-search */}
        </div>
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
                <a href="category.html" className="sf-with-ul">
                  Shop
                </a>
                <div className="megamenu megamenu-md">
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <div className="menu-col">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="menu-title">Shop with sidebar</div>
                            {/* End .menu-title */}
                            <ul>
                              <li>
                                <a href="category-list.html">Shop List</a>
                              </li>
                              <li>
                                <a href="category-2cols.html">
                                  Shop Grid 2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="category.html">Shop Grid 3 Columns</a>
                              </li>
                              <li>
                                <a href="category-4cols.html">
                                  Shop Grid 4 Columns
                                </a>
                              </li>
                              <li>
                                <a href="category-market.html">
                                  <span>
                                    Shop Market
                                    <span className="tip tip-new">New</span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div className="menu-title">Shop no sidebar</div>
                            {/* End .menu-title */}
                            <ul>
                              <li>
                                <a href="category-boxed.html">
                                  <span>
                                    Shop Boxed No Sidebar
                                    <span className="tip tip-hot">Hot</span>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="category-fullwidth.html">
                                  Shop Fullwidth No Sidebar
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End .col-md-6 */}
                          <div className="col-md-6">
                            <div className="menu-title">Product Category</div>
                            {/* End .menu-title */}
                            <ul>
                              <li>
                                <a href="product-category-boxed.html">
                                  Product Category Boxed
                                </a>
                              </li>
                              <li>
                                <a href="product-category-fullwidth.html">
                                  <span>
                                    Product Category Fullwidth
                                    <span className="tip tip-new">New</span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div className="menu-title">Shop Pages</div>
                            {/* End .menu-title */}
                            <ul>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="dashboard.html">My Account</a>
                              </li>
                              <li>
                                <a href="#">Lookbook</a>
                              </li>
                            </ul>
                          </div>
                          {/* End .col-md-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .menu-col */}
                    </div>
                    {/* End .col-md-8 */}
                    <div className="col-md-4">
                      <div className="banner banner-overlay">
                        <a href="category.html" className="banner banner-menu">
                          <img
                            src="assets/images/menu/banner-1.jpg"
                            alt="Banner"
                            width={218}
                            height={314}
                          />
                          <div className="banner-content banner-content-top">
                            <div className="banner-title text-white">
                              Last
                              <br />
                              Chance
                              <br />
                              <span>
                                <strong>Sale</strong>
                              </span>
                            </div>
                            {/* End .banner-title */}
                          </div>
                          {/* End .banner-content */}
                        </a>
                      </div>
                      {/* End .banner banner-overlay */}
                    </div>
                    {/* End .col-md-4 */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .megamenu megamenu-md */}
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                </a>
                <div className="megamenu megamenu-sm">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="menu-col">
                        <div className="menu-title">Product Details</div>
                        {/* End .menu-title */}
                        <ul>
                          <li>
                            <a href="product.html">Default</a>
                          </li>
                          <li>
                            <a href="product-centered.html">Centered</a>
                          </li>
                          <li>
                            <a href="product-extended.html">
                              <span>
                                Extended Info
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="product-gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="product-sticky.html">Sticky Info</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">
                              Boxed With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-fullwidth.html">Full Width</a>
                          </li>
                          <li>
                            <a href="product-masonry.html">
                              Masonry Sticky Info
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* End .menu-col */}
                    </div>
                    {/* End .col-md-6 */}
                    <div className="col-md-6">
                      <div className="banner banner-overlay">
                        <a href="category.html">
                          <img
                            src="assets/images/menu/banner-2.jpg"
                            alt="Banner"
                            width={218}
                            height={310}
                          />
                          <div className="banner-content banner-content-bottom">
                            <div className="banner-title text-white">
                              New Trends
                              <br />
                              <span>
                                <strong>spring 2019</strong>
                              </span>
                            </div>
                            {/* End .banner-title */}
                          </div>
                          {/* End .banner-content */}
                        </a>
                      </div>
                      {/* End .banner */}
                    </div>
                    {/* End .col-md-6 */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .megamenu megamenu-sm */}
              </li>
              <li>
                <a href="#" className="sf-with-ul">
                  Pages
                </a>
                <ul>
                  <li>
                    <a href="about.html" className="sf-with-ul">
                      About
                    </a>
                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      <li>
                        <a href="about-2.html">About 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html" className="sf-with-ul">
                      Contact
                    </a>
                    <ul>
                      <li>
                        <a href="contact.html">Contact 01</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
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
              <li>
                <a href="elements-list.html" className="sf-with-ul">
                  Elements
                </a>
                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements-titles.html">Titles</a>
                  </li>
                  <li>
                    <a href="elements-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="elements-product-category.html">
                      Product Category
                    </a>
                  </li>
                  <li>
                    <a href="elements-video-banners.html">Video Banners</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-blog-posts.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="elements-portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="elements-cta.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="elements-icon-boxes.html">Icon Boxes</a>
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