import React from 'react'
import HeroSection from './hero-section.jsx'
import TrendingDestination from './trending-destination-section.jsx'
import Search from '@/features/search';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <div className='-mt-8 relative z-[2]'>
        <Search />
      </div>
      <TrendingDestination/>
    </>
  )
}

export default Home