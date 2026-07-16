"use client"

import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import React from 'react'
import { useSelector } from 'react-redux'

function page() {
  const search = useSelector((state) => state.search.value);

  return (
    <div>
      {!search && (
        <>
        <Hero />
        <Categories />
        </>
      )}

      <ProductGrid />
    </div>
  )
}

export default page