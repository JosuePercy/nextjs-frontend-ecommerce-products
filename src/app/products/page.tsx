"use client"

import React, { useEffect, useState } from 'react'

import Banner from '@/components/layout-components/banner/Banner'
import Contact from '@/components/layout-components/contact/Contact'
import FilterProducts from '@/components/layout-components/filter/FilterProducts'
import ProductFilterRight from '@/components/layout-components/product-filter-right/product-filter-right'

import { IProduct } from '@/interfaces/products.interface'
import Product from '@/components/layout-components/product/Product'
import { fetchGET } from '@/utils/fetch-apis'
import { UIProvider } from '@/context/ui/UIProvider'


const Page = () => {

  const [products, setProducts] = useState<IProduct[]>([])


  const getFetchProducts = () => {
    const response = fetchGET(`${process.env.NEXT_PUBLIC_API}/products`)
      .then(products => {
          setProducts(products)
      })
    return response
  }



  useEffect(() => {
    getFetchProducts()
  }, [])

  return (

    <main>
      <Banner />
      <section className="pb-80">
        <div className='Container'>
          <div className='row g-4 flex-items-lg-start categories-container'>
            <FilterProducts />
            <div className='col-xl-9 col-lg-8'>
              <div className='category-product'>
                <ProductFilterRight />
                <div className='row g-2 g-md-4'>
                  {
                    products.map((product: IProduct) => {
                      return (
                        <Product key={product.id} product={product} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Filters /> */}
      <Contact />
    </main>

  )
}

export default Page