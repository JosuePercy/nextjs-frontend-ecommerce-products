"use client"

import React, { useContext, useEffect, useState } from 'react'

import Banner from '@/components/layout-components/banner/Banner'
import Contact from '@/components/layout-components/contact/Contact'
import FilterProducts from '@/components/layout-components/filter/FilterProducts'
import ProductFilterRight from '@/components/layout-components/product-filter-right/product-filter-right'

import { IProduct } from '@/interfaces/products.interface'
import Product from '@/components/layout-components/product/Product'
import { fetchGET } from '@/utils/fetch-apis'
import { UIProvider } from '@/context/ui/UIProvider'
import { useSearchParams } from 'next/navigation'
import { UIContext } from '@/context/ui'


const Page = () => {

  const searchParams = useSearchParams()
  const [products, setProducts] = useState<IProduct[]>([])
  const [queryCategory, setQueryCategory] = useState<string | null>(searchParams.get('category'))
  const [loading, setLoading] = useState<boolean>(true)
  const { setQueryCategoryContext } = useContext(UIContext)


  const getDataProductFromCategory = () => {
    if (queryCategory === null) return
    fetchGET(`${process.env.NEXT_PUBLIC_API}/products/category/${queryCategory}`)
      .then(products => {
        setLoading(false)
        setProducts(products)
      })
  }


  useEffect(() => {
    getDataProductFromCategory()
  }, [queryCategory])


  useEffect(() => {
    setLoading(true)

    const handleRouteChange = () => {
      const category = searchParams.get('category');
      setQueryCategoryContext(category ?? "")
      setQueryCategory(category);
    };

    handleRouteChange(); // Call initially to set the category

    // Set up a MutationObserver to detect changes in the URL's search parameters
    const observer = new MutationObserver(handleRouteChange);
    observer.observe(document, {
      subtree: true,
      childList: true
    });

    // Cleanup the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [searchParams]);


  const getFetchProducts = () => {
    const response = fetchGET(`${process.env.NEXT_PUBLIC_API}/products`)
      .then(products => {
        setLoading(false)
        setProducts(products)
      })
    return response
  }



  useEffect(() => {
    if (searchParams.get('category')) getDataProductFromCategory()
    else getFetchProducts()
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
                    loading ?
                      <div className="spinner-container">
                        <div className="spinner"></div>
                      </div> :
                      (
                        products.map((product: IProduct) => {
                          return (
                            <Product key={product.id} product={product} />
                          )
                        })
                      )
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