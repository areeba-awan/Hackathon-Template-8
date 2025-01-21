
import Mainsection from '@/components/mainsection'
import React from 'react'
import TopCategories from '@/components/TopCategories'
import Newstyle from '@/components/newstyle'
import OurProduct from '@/components/OurProducts'
import Footer from '@/components/footer'
import FeatureProducts from '@/components/FeatureProducts'


export default function Home() {  
  return (
    <div className='m-3'>
      <Mainsection/>
      <FeatureProducts />
      
      {/* <Feauture/> */}
      <TopCategories/>
      <Newstyle/>
      <OurProduct/>
      
      {/* <Footer/> */}
    </div>
  )
}