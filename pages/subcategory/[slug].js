import React, { useEffect, useState } from "react";

import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import ProductCard from "@/components/product/ProductCard";

const maxResult = 3;

const SubCategoryProduct = ({ category, products, slug }) => {
    console.log(products);
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();
  
    useEffect(() => {
      setPageIndex(1);
    }, [query]);
  
    const { data, error, isLoading } = useSWR(
      `/api/products?populate=*&[filters][sub_category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
      fetchDataFromApi,
      {
        fallbackData: products,
      }
    );
  return (
    <main className="main">
    <div
      className="page-header text-center"
      style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
    >
      <div className="container">
        <h1 className="page-title">
        {category?.data?.[0]?.attributes?.name}<span>Shop</span>
        </h1>
      </div>
      {/* End .container */}
    </div>
    {/* End .page-header */}
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Shop</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Grid 4 Columns
          </li>
        </ol>
      </div>
      {/* End .container */}
    </nav>
    {/* End .breadcrumb-nav */}
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
        
            {/* End .toolbox */}
            <div className="products mb-3">
              <div className="row justify-content-center">
              {products?.data?.map((product) => (
          <div key={product?.id} className="col-6 col-md-4 col-lg-4 col-xl-3">
            <ProductCard key={product?.id} data={product} />
          </div>
        ))}
        
       
              </div>
              {/* End .row */}
            </div>
     
          </div>
          {/* End .col-lg-9 */}
          <aside className="col-lg-3 order-lg-first">
            <div className="sidebar sidebar-shop">
        
  
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-1"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-1"
                  >
                    Category
                  </a>
                </h3>
                {/* End .widget-title */}
                <div className="collapse show" id="widget-1">
                  <div className="widget-body">
                    <div className="filter-items filter-items-count">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-1"
                          >
                            Dresses
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">3</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-2"
                          >
                            T-shirts
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-3"
                          >
                            Bags
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">4</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-4"
                          >
                            Jackets
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">2</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-5"
                          >
                            Shoes
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">2</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-6"
                          >
                            Jumpers
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">1</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-7"
                          >
                            Jeans
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">1</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-8"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-8"
                          >
                            Sportwear
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                    </div>
                    {/* End .filter-items */}
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .collapse */}
              </div>

            </div>
            {/* End .sidebar sidebar-shop */}
          </aside>
          {/* End .col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
    {/* End .page-content */}
  </main>
  )
}

export default SubCategoryProduct

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/sub-categories?populate=*");
    const paths = category?.data?.map((c) => ({
      params: {
        slug: c.attributes.slug,
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromApi(
      `/api/sub-categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
      `/api/products?populate=*&[filters][sub_category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );
  
    return {
      props: {
        category,
        products,
        slug,
      },
    };
  }
  
