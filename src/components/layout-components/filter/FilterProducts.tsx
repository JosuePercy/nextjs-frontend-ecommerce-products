"use client"

import React, { useContext, useEffect, useState } from 'react'
import { ICategory } from '@/interfaces/products.interface'
import './FilterProducts.css'
import Category from './Category'
import { fetchGET } from '@/utils/fetch-apis'
import { useSearchParams } from 'next/navigation'
import { UIContext } from '@/context/ui'

const FilterProducts = () => {

    const [category, setCategory] = useState<ICategory[]>()
    const { queryCategoryContext } = useContext(UIContext)

    const getFetchCategory = () => {
        const response = fetchGET(`${process.env.NEXT_PUBLIC_API}/categories`)
            .then((data: ICategory[]) => {
                const results = data.map((item) => {
                    return {
                        name: item.name,
                        url: item.url
                    }
                })
                setCategory(results)
            })
        return response
    }



    useEffect(() => {
        getFetchCategory()
    }, [])

    return (
        <div className='col-xl-3 col-lg-4 d-none d-lg-block'>
            <div className='card sticky-side-div filter-sidebar'>
                <div className='card-header px-25 py-15'>
                    <div className='d-flex'>
                        <div className='flex-grow-1'>
                            <h5 className='card-title'>Filter</h5>
                        </div>
                    </div>
                </div>
                <div className='filter-accordion'>
                    <div className='px-25 py-15 border-bottom'>
                        <div>
                            <p className="text-uppercase fs-13 fw-semibold filter-by">
                                Category
                            </p>
                            <ul className='list-unstyled mb-0 mt-3 filter-list'>
                                {
                                    
                                    category?.map((item) => {
                                        return <Category
                                            category={item}
                                            key={item.url}
                                            urlQuery={queryCategoryContext} />
                                    })

                                    /*  CATEGORY_NAME.map(category => (
                                         <li key={category.name}>
                                             <a className='d-flex cate-menu-active align-items-center position-relative' href="https://cartuser.kodepixel.com/category/electronics/4">
                                                 <div className='flex-grow-1'>
                                                     <h5 className={`listname ${category.price == 14 ? "cate-menu-active" : ""}`}>{category.name}</h5>
                                                 </div>
                                                 <span className="flex-shrink-0 ms-2 badge bg-light text-muted fs-12">
                                                     {category.price}
                                                 </span>
                                             </a>
                                         </li>
                                     )) */
                                }
                                {/* TODO: poner boton */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterProducts
