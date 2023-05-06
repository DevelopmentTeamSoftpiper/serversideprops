import React, { useEffect, useState } from "react";

import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import BestDeal from "@/components/home/ProductCarousel";

const maxResult = 3;

const CategoryProduct = ({ category, products, slug }) => {
  console.log(category);
  const [pageIndex, setPageIndex] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );

    const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };
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
            <a href="#">{category?.data?.[0]?.attributes?.name}
</a>
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
                       
                            <div className="menu-col">
                              
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
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

            </div>
            {/* End .sidebar sidebar-shop */}
          </aside>
          {/* End .col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
      <BestDeal title="Related Products" products={products}/>

    </div>
    {/* End .page-content */}
  </main>
  )
}

export default CategoryProduct

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
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
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
