/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import ProductCard from '../product/ProductCard';
import { fetchDataFromApi } from '@/utils/api';

const TestCategory = ({products, categories}) => {
    const pd =products.data[2].attributes;
    const category = categories.data[3].attributes;
    const subCategory = category.sub_categories.data;
    const [filterProduct, setFilterProduct] = useState(null);

    const handleProductFilter = async(slug) =>{
            const { data } = await fetchDataFromApi(`/api/sub-categories?populate=*&filters[name][[$in]]=${slug}`);
            setFilterProduct(data);
    }
    const finalProduct = filterProduct?.map(pd => pd.attributes.products.data)[0]
    finalProduct && console.log(finalProduct.length);
    
    return (
        <>
        <div className="container electronics mb-4">
            <div className="bg-lighter trending-products">
                <div className="heading heading-flex">
                    <div className="heading-left">
                        <h2 className="title font-weight-bold mb-1">{category.name}</h2>
                        {/* End .title */}
                    </div>
                {/* End .heading-left */}
                     <div className="heading-right">
                        <ul
                        className="nav nav-pills justify-content-center mr-n3"
                        role="tablist"
                        >
                            { 
                            subCategory.map(sb => {
                                // eslint-disable-next-line react/jsx-key
                                return <li className="nav-item">
                                                <button 
                                                    onClick={() => handleProductFilter(sb.attributes.name)}
                                                    className="nav-link font-size-normal second-primary-color font-weight-normal text-uppercase active">
                                                    {sb.attributes.name}
                                                </button>
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