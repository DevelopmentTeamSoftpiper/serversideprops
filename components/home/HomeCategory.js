import { fetchDataFromApi } from '@/utils/api';
import React, { useEffect, useState } from 'react';

const HomeCategory = () => {
//     const [categories, setCategories] = useState(null);
//   useEffect(() => {
//     fetchCategories();
//   }, []);
//   const fetchCategories = async () => {
//     const { data } = await fetchDataFromApi("/api/categories?populate=*");
//     setCategories(data);
//   };
    return (
        <>
            <div className="container banner-group-1">
                <div className="categories mb-3">
                    <h3 className="title text-center font-weight-bold mt-4">
                    Explore Popular Categories
                    </h3>
                    <div
                    className="owl-carousel carousel-theme carousel-simple carousel-with-shadow row cols-2 cols-xs-3 cols-sm-4 cols-md-5 cols-lg-6 cols-xl-8"
                    data-toggle="owl"
                    data-owl-options='{
                                        "nav": false, 
                                        "dots": false,
                                        "margin": 10,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":3
                                            },
                                            "576": {
                                                "items":3
                                            },
                                            "768": {
                                                "items":5
                                            },
                                            "992": {
                                                "items":6
                                            },
                                            "1200": {
                                                "items":8
                                            }
                                        }
                                    }'
                    >

                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/1.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Clothing
                        </a>
                        </div>
                    </div>

                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/2.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Computer &amp; Laptop
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/3.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Lighting
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/4.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Smart Phones
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/5.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Televisions
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/6.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Cooking
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/7.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Furniture
                        </a>
                        </div>
                    </div>
                    <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <img
                            src="assets/images/demos/demo-26/categories/8.png"
                            className="w-100"
                            alt=""
                            width={166}
                            height={160}
                            />
                        </a>
                        </div>
                        <div className="category-body letter-spacing-normal font-size-normal text-center position-absolute text-uppercase">
                        <a
                            href="#"
                            className="category-title text-truncate font-weight-normal"
                        >
                            Game &amp; Toy
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomeCategory;