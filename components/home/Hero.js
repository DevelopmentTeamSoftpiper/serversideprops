import { fetchDataFromApi } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
      fetchCategories();
    }, []);
    const fetchCategories = async () => {
      const { data } = await fetchDataFromApi("/api/categories?populate=*");
      setCategories(data);
    };
    console.log(categories);
  return (
    <div className="intro-section">
    <div className="container mt-2">
      <div className="row">
        <div className="col-lg-5cols d-none d-lg-block">
          <nav className="side-nav">
            <div className="sidenav-title letter-spacing-normal font-size-normal d-flex justify-content-xl-between align-items-center bg-primary justify-content-center text-truncate">
              Browse Categories
              <i className="icon-bars float-right h5 text-white m-0 d-none d-xl-block" />
            </div>
            {/* End .sidenav-title   font-size-normal */}
            <ul
              className="menu-vertical sf-arrows sf-js-enabled"
              style={{ touchAction: "pan-y" }}
            >
                {categories?.map((c)=>(

            
              <li key={c.id} className="megamenu-container">
                <Link 
                 className={
                    c?.attributes?.sub_categories?.data?.length > 0
                      ? "sf-with-ul text-dark"
                      : "text-dark"
                  }
                 href={`/category/${c?.attributes?.slug}`}>
                  <i className="icon-couch" />
                  {c?.attributes?.name}
                </Link>
                {c?.attributes?.sub_categories?.data?.length > 0 && (

            
                <div className="megamenu">
                  <div className="row ">
                    <div className="col-md-8">
                      <div className="menu-col">
                        <div className="row">
                          <div className="col-md-6">

                            <ul>
                            {c?.attributes?.sub_categories?.data?.map((sub) => (
                              <li key={sub?.id}>
                                <Link href={`/subcategory/${sub?.attributes?.slug}`}>{sub?.attributes?.name}</Link>
                              </li>
                            ))}
                            </ul>

                
                          </div>
                          {/* End .col-md-6 */}
               
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .menu-col */}
                    </div>
                    {/* End .col-md-8 */}

                  </div>
                  {/* End .row */}
                </div>
                    )}
                {/* End .megamenu */}
              </li>
    ))}
   
            </ul>
            {/* End .menu-vertical */}
          </nav>
          {/* End .dropdown-menu */}
        </div>
        <div className="col-lg-3-5cols col-md-9 col-12 mb-md-0 mb-2">
          <div className="intro-slider-container">
            <div
              className="intro-slider owl-carousel owl-theme owl-nav-inside row cols-1"
              data-toggle="owl"
              data-owl-options='{
                                  "nav": false,
                                  "dots": true,
                                  "autoplay": false,
                                  "autoplayTimeout": 10000,
                                  "animateOut": "fadeOut"
                              }'
            >
              <div
                className="intro-slide bg-image d-flex align-items-center"
                style={{
                  backgroundColor: "#222",
                  backgroundImage:
                    "url(assets/images/demos/demo-26/slider/slide-1.jpg)"
                }}
              >
                <div className="intro-content">
                  <h3 className="intro-subtitle font-size-normal text-dark font-weight-normal text-uppercase">
                    Trade-In Offer
                  </h3>
                  {/* End .h3 intro-subtitle font-size-normal */}
                  <h1 className="intro-title text-dark font-weight-bold mb-0">
                    Multi-motion
                    <br />
                    Food Processor
                  </h1>
                  {/* End .intro-title */}
                  <div className="intro-price text-dark font-weight-normal">
                    <sup className="font-weight-normal">
                      from
                      <span className="text-primary font-weight-normal">$</span>
                    </sup>
                    <span className="text-primary font-weight-bold">
                      199
                      <sup className="font-weight-normal">.99</sup>
                    </span>
                  </div>
                  {/* End .intro-price */}
                  <a
                    href="category.html"
                    className="btn btn-primary text-uppercase text-dark"
                  >
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .intro-content */}
              </div>
              {/* End .intro-slide */}
              <div
                className="intro-slide bg-image d-flex align-items-center"
                style={{
                  backgroundColor: "#222",
                  backgroundImage:
                    "url(assets/images/demos/demo-26/slider/slide-2.jpg)"
                }}
              >
                <div className="intro-content">
                  <h3 className="intro-subtitle font-size-normal text-dark font-weight-normal text-uppercase">
                    New Arrivals
                  </h3>
                  {/* End .h3 intro-subtitle font-size-normal */}
                  <h1 className="intro-title text-white font-weight-bold mb-0">
                    New Collection!
                    <br />
                    Air More Uptempo
                  </h1>
                  {/* End .intro-title */}
                  <div className="intro-price text-white font-weight-normal position-relative mb-3">
                    <div className="position-relative">
                      <sup className="font-weight-normal">from</sup>
                      <span className="font-weight-bold ml-n2">
                        $79
                        <sup className="font-weight-normal">.99</sup>
                      </span>
                    </div>
                    <img
                      src="assets/images/demos/demo-26/slider/slide-2-brushpng.png"
                      className="position-absolute w-auto h-auto"
                      alt=""
                      width={85}
                      height={35}
                    />
                  </div>
                  {/* End .intro-price */}
                  <a
                    href="category.html"
                    className="btn btn-primary text-uppercase text-dark"
                  >
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .intro-content */}
              </div>
              {/* End .intro-slide */}
              <div
                className="intro-slide bg-image d-flex align-items-center"
                style={{
                  backgroundColor: "#fff",
                  backgroundImage:
                    "url(assets/images/demos/demo-26/slider/slide-3.jpg)"
                }}
              >
                <div className="intro-content">
                  <h3 className="intro-subtitle font-size-normal text-white font-weight-normal text-uppercase">
                    Design special
                  </h3>
                  {/* End .h3 intro-subtitle font-size-normal */}
                  <h1 className="intro-title text-white font-weight-bold mt-0 my-2">
                    Lamps Made
                    <br />
                    Of Natural Materials
                  </h1>
                  {/* End .intro-title */}
                  <div className="intro-text text-secondary font-weight-lighter mb-4">
                    Extra 25% Off
                  </div>
                  {/* End .intro-text */}
                  <a
                    href="category.html"
                    className="btn btn-primary text-uppercase text-dark"
                  >
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .intro-content */}
              </div>
              {/* End .intro-slide */}
            </div>
            {/* End .intro-slider owl-carousel owl-simple */}
            {/* 
                              <span class="slider-loader"></span>
                          End .slider-loader */}
          </div>
        </div>
        <div className="col-lg-5cols col-md-3 col-12 mb-md-0 mb-2">
          <div
            className="banner banner-overlay bg-image h-100 mb-0"
            style={{
              backgroundColor: "#f1f1f1",
              backgroundImage:
                "url(assets/images/demos/demo-26/banners/banner-1.jpg)"
            }}
          >
            <div className="banner-content position-relative pt-0 pb-md-7 d-flex flex-column">
              <div className="title text-center text-uppercase text-dark font-weight-bold mb-0">
                Phantom 3
                <br />
                Professional
              </div>
              <div className="price text-center">
                <sup className="text-dark font-weight-normal">
                  from
                  <span className="text-primary font-weight-normal">$</span>
                </sup>
                <span className="text-primary font-weight-bold">599.</span>
                <sup
                  className="text-primary font-weight-bold"
                  style={{ fontSize: "55%", top: "-.6em" }}
                >
                  99
                </sup>
              </div>
            </div>
            {/* End .banner-content */}
          </div>
          {/* End .banner banner-overlay */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero