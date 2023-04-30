import React, { useState } from 'react'
import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';

const Header = () => {
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
            Call: +0123 456 789
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
                    <a href="#">USD</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                </li>
                <li>
                  <div className="header-dropdown">
                    <a href="#">English</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
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
          <a href="index.html" className="logo">
            <img
              src="assets/images/demos/demo-26/logo.png"
              alt="Molla Logo"
              width={105}
              height={25}
            />
          </a>
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
            <div className="dropdown compare-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <div className="icon">
                  <i className="icon-random" />
                </div>
                <p>Compare</p>
              </a>
            </div>
            <div className="wishlist">
              <a href="wishlist.html" title="Wishlist">
                <div className="icon">
                  <i className="icon-heart-o" />
                  <span className="wishlist-count badge">3</span>
                </div>
                <p>Wishlist</p>
              </a>
            </div>
            {/* End .compare-dropdown */}
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <div className="icon">
                  <i className="icon-shopping-cart" />
                  <span className="cart-count">2</span>
                </div>
                <p>Cart</p>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title letter-spacing-normal font-size-normal">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>
                      <span className="cart-product-info">
   
                        <span className="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                          width={200}
                          height={300}
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title letter-spacing-normal font-size-normal">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $76.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                </div>
                {/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>
                {/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .dropdown-cart-total */}
              </div>
              {/* End .dropdown-menu */}
            </div>
            {/* End .cart-dropdown */}
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
                <a href="index.html" className="sf-with-ul">
                  Home
                </a>
                <div className="megamenu demo">
                  <div className="menu-col">
                    <div className="menu-title">Choose your demo</div>
                    {/* End .menu-title */}
                    <div className="demo-list">
                      <div className="demo-item">
                        <a href="index-1.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/1.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            01 - furniture store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-2.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/2.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            02 - furniture store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-3.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/3.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            03 - electronic store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-4.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/4.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            04 - electronic store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-5.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/5.jpg)"
                            }}
                          />
                          <span className="demo-title">05 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-6.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/6.jpg)"
                            }}
                          />
                          <span className="demo-title">06 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-7.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/7.jpg)"
                            }}
                          />
                          <span className="demo-title">07 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-8.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/8.jpg)"
                            }}
                          />
                          <span className="demo-title">08 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-9.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/9.jpg)"
                            }}
                          />
                          <span className="demo-title">09 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item">
                        <a href="index-10.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/10.jpg)"
                            }}
                          />
                          <span className="demo-title">10 - shoes store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-11.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/11.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            11 - furniture simple store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-12.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/12.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            12 - fashion simple store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-13.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/13.jpg)"
                            }}
                          />
                          <span className="demo-title">13 - market</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-14.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/14.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            14 - market fullwidth
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-15.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/15.jpg)"
                            }}
                          />
                          <span className="demo-title">15 - lookbook 1</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-16.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/16.jpg)"
                            }}
                          />
                          <span className="demo-title">16 - lookbook 2</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-17.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/17.jpg)"
                            }}
                          />
                          <span className="demo-title">17 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-18.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/18.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            18 - fashion store (with sidebar)
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-19.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/19.jpg)"
                            }}
                          />
                          <span className="demo-title">19 - games store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-20.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/20.jpg)"
                            }}
                          />
                          <span className="demo-title">20 - book store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-21.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/21.jpg)"
                            }}
                          />
                          <span className="demo-title">21 - sport store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-22.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/22.jpg)"
                            }}
                          />
                          <span className="demo-title">22 - tools store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-23.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/23.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            23 - fashion left navigation store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-24.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/24.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            24 - extreme sport store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-25.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/25.jpg)"
                            }}
                          />
                          <span className="demo-title">25 - jewelry store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-26.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/26.jpg)"
                            }}
                          />
                          <span className="demo-title">26 - market store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-27.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/27.jpg)"
                            }}
                          />
                          <span className="demo-title">27 - fashion store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-28.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/28.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            28 - food market store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-29.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/29.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            29 - t-shirts store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-30.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/30.jpg)"
                            }}
                          />
                          <span className="demo-title">
                            30 - headphones store
                          </span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                      <div className="demo-item hidden">
                        <a href="index-31.html">
                          <span
                            className="demo-bg"
                            style={{
                              backgroundImage:
                                "url(assets/images/menu/demos/31.jpg)"
                            }}
                          />
                          <span className="demo-title">31 - yoga store</span>
                        </a>
                      </div>
                      {/* End .demo-item */}
                    </div>
                    {/* End .demo-list */}
                    <div className="megamenu-action text-center">
                      <a
                        href="#"
                        className="btn btn-outline-primary-2 view-all-demos"
                      >
                        <span>View All Demos</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .text-center */}
                  </div>
                  {/* End .menu-col */}
                </div>
                {/* End .megamenu */}
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
  </>
  )
}

export default Header