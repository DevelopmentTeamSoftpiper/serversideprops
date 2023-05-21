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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsLetter from "@/components/home/NewsLetter";
import Blog from "@/components/home/Blog";

export default function Home({ products,categories, siteinfo ,catProducts,blogs,mainSlider}) {
  // console.log('blogs',blogs);
  // console.log('mainSlider',mainSlider);

const showToastMessage =(data)=>{
  toast.success(data.msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
 
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

  return (
    <>
      <div className="page-wrapper" style={{padding:"10px"}}>
      <ToastContainer/>

        {/* <Header /> */}
        <main className="main" style={{ backgroundColor: "#fafafa" }}>
          <Hero mainSlider={mainSlider}/>
          <HomeService />
          <HomeCategory categories={categories} />
          <MiniBanner  />
          <TestCategory catProducts={catProducts} showToastMessage={showToastMessage}/>
          <LatestProduct showToastMessage={showToastMessage} />
          <Banner1/>
          <ProductCarousel title="Discount Sales" field='discountedsale' showToastMessage={showToastMessage} />
          <ProductCarousel title="Best Deals" field="bestdeal" showToastMessage={showToastMessage} />
          <Blog blogs={blogs} />
          <NewsLetter/>
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
  const blogs = await fetchDataFromApi("/api/blogs?populate=*");
  const siteinfo = await fetchDataFromApi("/api/siteinfo?populate=*");
  const mainSlider = await fetchDataFromApi("/api/home-sliders?populate=*");

  return {
    props: {
      products,
      categories,
      siteinfo,
      catProducts,
      blogs,
      mainSlider
    },
  };
}
