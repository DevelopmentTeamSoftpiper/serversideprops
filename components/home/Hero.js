import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MainSwiper from "./MainSwiper";

const Hero = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <div className="intro-section">
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
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
                {categories?.map((c) => (
                  <li key={c.id} className="megamenu-container">
                    <Link
                      className={
                        c?.attributes?.sub_categories?.data?.length > 0
                          ? "sf-with-ul text-dark"
                          : "text-dark"
                      }
                      href={`/category/${c?.attributes?.slug}`}
                    >
                      <i className="icon-couch" />
                      {c?.attributes?.name}
                    </Link>
                    {c?.attributes?.sub_categories?.data?.length > 0 && (
                      <div className="megamenu">
                        <div className="row ">
                          <div className="col-md-8">
                            <div className="menu-col">
                              <div className="row">
                                <div className="col-md-12">
                                  <ul>
                                    {c?.attributes?.sub_categories?.data?.map(
                                      (sub) => (
                                        <li key={sub?.id}>
                                          <Link
                                            href={`/subcategory/${sub?.attributes?.slug}`}
                                          >
                                            {sub?.attributes?.name}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-lg-9 col-md-9 col-12 mb-md-0 mb-2">
             <MainSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
