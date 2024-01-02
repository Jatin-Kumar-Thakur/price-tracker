// 'use client'
import Herocarousel from '@/components/Herocarousel'
import Searchbar from '@/components/Searchbar'
import '@/style/home.css'
import Image from 'next/image'
const Home = () => {
  return (
    <>
      <section  className='home-main'>
        <div className="first-section">
          <div className="first-section-box1">
            <p className='first-section-arrow'>
              Smart Shooping start here :  
              <Image src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={16}
                style={{
                  visibility:"visible",
                  position:'relative',
                  top:"3px",
                  left:"3px"
                }}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of 
              <span> PriceTracker</span>
            </h1>

            <p className='head-description'>
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>
          <Herocarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className='treanding-header'>
          Trendingss
        </h2>
        <div className="trending-items">
          <div>
            List is here
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
