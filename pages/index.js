import { fetchDataFromApi, getData } from "@/utils/api";
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

export default function Home({ products,categories ,blogs,mainSlider,latestProducts,discountedProducts,bestDealProducts}) {

console.log(bestDealProducts);
const showToastMessage =(data)=>{
  toast.success(data.msg, {
    position: "top-right",
    autoClose: 1000,
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
          {/* <HomeCategory categories={categories} /> */}
          <MiniBanner  />
         
          <LatestProduct  products={latestProducts} showToastMessage={showToastMessage} />
          <Banner1/>
          <ProductCarousel title="Discount Sales" products={discountedProducts} showToastMessage={showToastMessage} />
          <ProductCarousel title="Best Deals" products={bestDealProducts} showToastMessage={showToastMessage} />
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

export async function getServerSideProps(context) {
  const products =await getData("/api/admin/product/getAll");
  const categories = await getData("/api/admin/category/getAll");
  const blogs = await getData("/api/admin/blog/getAll");
  const mainSlider = await getData("/api/admin/slider/getAll");
  // const latestProduct = await fetchDataFromApi(`/api/products?populate=*&sort=id:desc&?pagination[page]=1&pagination[pageSize]=10`);
  const latestProducts = await getData("/api/admin/product/getAll");
  const discountedProducts = await getData("/api/admin/product/discounted");
  const bestDealProducts = await getData("/api/admin/product/bestDeal");

  return {
    props: {
      products,
      categories,
      blogs,
      mainSlider,
      latestProducts,
      discountedProducts,
      bestDealProducts

      
    },
  };
}
