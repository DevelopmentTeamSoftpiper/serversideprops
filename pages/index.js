import { fetchDataFromApi } from "@/utils/api";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenuOverlay from "@/components/layout/MobileMenuOverlay";
import MobileMenuContainer from "@/components/layout/MobileMenuContainer";
import Hero from "@/components/home/Hero";
import Banner1 from "@/components/home/Banner1";
import MiniBanner from "@/components/home/MiniBanner";
import HomeService from "@/components/home/HomeService";
import LatestProduct from "@/components/home/LatestProduct";
import ProductCarousel from "@/components/home/ProductCarousel";
import HomeCategory from "@/components/home/HomeCategory";
import TestCategory from "@/components/home/TestCategory";


export default function Home({ products,categories, siteinfo ,catProducts}) {

// console.log(catProducts);
  return (
    <>
      <div className="page-wrapper" style={{padding:"10px"}}>
        {/* <Header /> */}
        <main className="main" style={{ backgroundColor: "#fafafa" }}>
          <Hero/>
          <HomeService />
          <HomeCategory categories={categories} />
          <MiniBanner />
          <TestCategory catProducts={catProducts} />
          <LatestProduct />
          <Banner1/>
          <ProductCarousel title="Discount Sales" field='discountedsale'/>
          <ProductCarousel title="Best Deals" field="bestdeal" />
        </main>
        {/* <Footer /> */}
      </div>
      {/* <MobileMenuOverlay  />
      <MobileMenuContainer /> */}
    </>
  );
}

export async function getStaticProps(context) {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const categories = await fetchDataFromApi("/api/categories?populate=*");
  const catProducts = await fetchDataFromApi(
    `/api/products?populate=*&[filters][category][slug][$eq]=grocery&pagination[page]=1&pagination[pageSize]=10`
  );
  const siteinfo = await fetchDataFromApi("/api/siteinfo?populate=*");
  return {
    props: {
      products,
      categories,
      siteinfo,
      catProducts
    },
  };
}
