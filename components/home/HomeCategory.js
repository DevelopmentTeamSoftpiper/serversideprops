import { fetchDataFromApi } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Navigation, } from "swiper";
import Image from 'next/image';
const HomeCategory = ({categories}) => {
    console.log(categories);
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
              
                    <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView:6,
                  },
                  1280: {
                    slidesPerView: 6,
                  },
                }}
          
                navigation={true}
                mousewheel={false}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    categories?.data?.map((cat)=><SwiperSlide key={cat?.id}> 
                                                          <div className="category position-relative">
                        <div className="category-image">
                        <a href="#">
                            <Image
                            src={cat?.attributes?.image?.data?.[0]?.attributes?.url}
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
                            {cat?.attributes?.name}
                        </a>
                        </div>
                    </div>
                                              </SwiperSlide>
                    )
                }
          </Swiper> 
                    

               
         
                
                </div>
            </div>

        </>
    );
};

export default HomeCategory;