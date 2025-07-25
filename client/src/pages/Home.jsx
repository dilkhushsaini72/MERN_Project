import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Category from '../components/Category'

const Home = () => {
  return (
    <div className='max-w-[1420px] mx-auto'>
      <Hero />
      <Products />
    </div>
  )
}

export default Home