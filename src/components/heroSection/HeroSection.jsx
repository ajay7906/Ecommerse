import React, { useContext } from 'react'
import HeroSaction from '../../assets/admin1.jpg'

import myContext from '../../context/data/myContext'

function HeroSection() {
  const context = useContext(myContext)
  const { product } = context;
  const Image = product[1]
  console.log(Image);
  const user = JSON.parse(localStorage.getItem('user'))
  const SectionImg= user?.user?.email === 'knupadhyay784@gmail.com'
  console.log(SectionImg);
  return (
    <>
    <div style={{
      backgroundImage: `url(${SectionImg ? HeroSaction : Image?.imageUrl })`, width: '100%', height: '50vh', filter: 'brightness(.9)',
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover ', backgroundPosition: 'center', backgroundAttachment: 'scroll'
    }}>
      {
        SectionImg ? ""
        
         :  <> <div style={{width:'22vw,', height:'22vh'}} className='bg-red-700  flex items-center justify-center absolute top-10 left-28 rounded-full'>
        <div className='p-3 px-3  pr-5 text-center'>
          <h1 style={{fontSize:'25px'}} className='text-lg '>30% off</h1>
        </div>
      </div>

      <button className='absolute bottom-7 left-20 m-11 bg-blue-800 p-3 rounded-lg'>Buy Now</button>  </>
      }

    </div>
  
    </>
    
  )
}

export default HeroSection
// <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />