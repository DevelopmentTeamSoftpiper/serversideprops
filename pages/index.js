import Image from "next/image";
import { Inter } from "next/font/google";
import BestDeal from "@/components/home/BestDeal";
import { fetchDataFromApi } from "@/utils/api";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenuOverlay from "@/components/layout/MobileMenuOverlay";
import MobileMenuContainer from "@/components/layout/MobileMenuContainer";
import Hero from "@/components/home/Hero";
import Banner1 from "@/components/home/Banner1";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, siteinfo }) {
  console.log(siteinfo);
  return (
    <>
      <div className="page-wrapper">
        {/* <Header /> */}
        <main className="main" style={{ backgroundColor: "#fafafa" }}>
          <Hero/>
          <BestDeal title="Hot Deals" products={products} />
          {/* <Banner1/> */}
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
  const siteinfo = await fetchDataFromApi("/api/siteinfo?populate=*");
  return {
    props: {
      products,
      siteinfo,
    },
  };
}
