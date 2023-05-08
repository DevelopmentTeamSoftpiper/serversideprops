/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TestCategoryRow from './TestCategoryRow';
import ProductCard from '../product/ProductCard';

const TestCategory = ({categories}) => {
    const ctgName = categories.data[3].attributes;
    const subCategory = ctgName.sub_categories;
    const products = ctgName.products;
    console.log(products);
    return (
        <>
        <div className="container electronics mb-4">
            <div className="bg-lighter trending-products">
                <div className="heading heading-flex">
                    <div className="heading-left">
                        <h2 className="title font-weight-bold mb-1">{ctgName.name}</h2>
                        {/* End .title */}
                    </div>
                {/* End .heading-left */}
                    <div className="heading-right">
                        <ul
                        className="nav nav-pills justify-content-center mr-n3"
                        role="tablist"
                        >
                            { 
                            subCategory.data.map(sb => {
                                // eslint-disable-next-line react/jsx-key
                                return <li className="nav-item">
                                    <a
                                        className="nav-link font-size-normal second-primary-color font-weight-normal text-uppercase active"
                                        id={sb.attributes.slug}
                                        data-toggle="tab"
                                        href="#electronic-cell-tab"
                                        role="tab"
                                        aria-controls={sb.attributes.slug}
                                        aria-selected="true"
                                        >
                                        {sb.attributes.name}
                                    </a>
                            </li> 

                            }) 
                            }
                        </ul>
                    </div>
                {/* End .heading-right */}
                </div>


                {/* End .heading */}


                <div className="tab-content tab-content-carousel position-relative">
                 
                    <div
                        className="tab-pane p-0 fade show active"
                        id="electronic-cell-tab"
                        role="tabpanel"
                        aria-labelledby="electronic-cell-link"
                    >
                        <div
                            className="electronic-carousel owl-carousel owl-simple carousel-equal-height row cols-2 cols-md-3 cols-lg-4 cols-xl-5 cols-xxl-6"
                            data-toggle="owl"
                            data-owl-options='{
                                            "nav": false, 
                                            "dots": false,
                                            "margin": 0,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":2
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "576": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":5
                                                },
                                                "1400": {
                                                    "items":6
                                                }
                                            }
                                        }'
                        >
                        {/* start .product */}

                        {
                            products.data.map((pd) => <ProductCard data={pd} />)
                        }

                       
                        {/* End .product */}

                        </div>
                        {/* End .owl-carousel */}
                    </div>
                </div>

            </div>
        </div>

        </>
    );
};

export default TestCategory;