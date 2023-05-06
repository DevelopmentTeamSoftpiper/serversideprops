import React from 'react';

const MiniBanner = () => {
    return (
        <div className='container mb-4'>
            <div className="row">
                <div className="col-md-4 mb-md-0 mb-2">
                    <div
                    className="banner banner-overlay bg-image h-100 d-flex justify-content-end mb-0"
                    style={{
                        backgroundImage: "url(assets/images/demos/demo-26/banners/banner-2.jpg)"
                    }}
                    >
                    <div className="banner-content position-relative d-flex flex-column justify-content-center">
                        <h4 className="banner-subtitle letter-spacing-normal font-size-normal text-white d-none d-sm-block font-weight-light">
                        <a href="#">Headphone Savings</a>
                        </h4>
                        {/* End .banner-subtitle letter-spacing-normal font-size-normal */}
                        <h3 className="banner-title text-white mb-0 font-weight-bold">
                        <a href="#">
                            Headphone
                            <br />
                            Trending
                            <br />
                            JBL Harman
                        </a>
                        </h3>
                        {/* End .banner-title */}
                        <a
                        href="#"
                        className="btn font-size-normal btn-primary text-uppercase text-dark btn-rounded text-center"
                        >
                        <span>Shop Now </span>
                        <i className="icon-long-arrow-right d-inline-block" />
                        </a>
                    </div>
                    {/* End .banner-content */}
                    </div>
                </div>
                
                <div className="col-md-4 mb-md-0 mb-2">
                    <div
                    className="banner banner-overlay bg-image h-100 d-flex justify-content-end mb-0"
                    style={{
                        backgroundImage: "url(assets/images/demos/demo-26/banners/banner-3.jpg)"
                    }}
                    >
                    <div className="banner-content position-relative d-flex flex-column justify-content-center">
                        <h4 className="banner-subtitle letter-spacing-normal font-size-normal d-none d-sm-block font-weight-light">
                        <a href="#">Weekend Sale</a>
                        </h4>
                        {/* End .banner-subtitle letter-spacing-normal font-size-normal */}
                        <h3 className="banner-title mb-0 font-weight-bold">
                        <a href="#">
                            Home Furnishings
                            <br />
                            Outdoor &amp; Office
                        </a>
                        </h3>
                        {/* End .banner-title */}
                        <a
                        href="#"
                        className="btn font-size-normal btn-primary text-uppercase text-dark btn-rounded text-center d-inline-block"
                        >
                        <span>Shop Now </span>
                        <i className="icon-long-arrow-right d-inline-block" />
                        </a>
                    </div>
                    {/* End .banner-content */}
                    </div>
                </div>
                
                <div className="col-md-4 mb-md-0 mb-2">
                    <div
                    className="banner banner-overlay bg-image h-100 d-flex justify-content-end mb-0"
                    style={{
                        backgroundImage: "url(assets/images/demos/demo-26/banners/banner-4.jpg)"
                    }}
                    >
                    <div className="banner-content position-relative d-flex flex-column justify-content-center">
                        <h4 className="banner-subtitle letter-spacing-normal font-size-normal text-white font-weight-light d-none d-sm-block">
                        <a href="#">Amazing Value</a>
                        </h4>
                        {/* End .banner-subtitle letter-spacing-normal font-size-normal */}
                        <h3 className="banner-title text-white mb-0 font-weight-bold">
                        <a href="#">
                            Clothes Trending
                            <br />
                            Spring / Summer{" "}
                        </a>
                        </h3>
                        {/* End .banner-title */}
                        <h4 className="banner-text font-weight-normal text-secondary mb-0 font-weight-light">
                        from $12.99
                        </h4>
                        <a
                        href="#"
                        className="btn font-size-normal btn-primary text-uppercase text-dark btn-rounded text-center"
                        >
                        <span>Discover Now </span>
                        <i className="icon-long-arrow-right d-inline-block" />
                        </a>
                    </div>
                    {/* End .banner-content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniBanner;