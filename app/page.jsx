import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <Categories/>
      <ProductGrid/>
    </div>
  )
}

export default page