import Image from 'next/image'
import { Inter } from 'next/font/google'
import BestDeal from '@/components/home/BestDeal'
import { fetchDataFromApi } from '@/utils/api'


const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
<main className='main' style={{backgroundColor:"#fafafa"}}>
    <BestDeal products={products}/>
</main>
  )
}

export async function getStaticProps(context){
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
   props: {
    products
   } 
  }
}