import React, { useContext, useEffect, useState } from 'react'
import './FilterProducts.css'

import { ICategory } from '@/interfaces/products.interface'
import Link from 'next/link'
import { fetchGET } from '@/utils/fetch-apis'
import { useSearchParams } from 'next/navigation'
import { UIContext } from '@/context/ui'

interface Props {
    category: ICategory,
    urlQuery: string
}


const Category = ({ category, urlQuery }: Props) => {

    return (
        <>
            <li key={category.name}>
                <Link
                    className={`d-flex cate-menu-active align-items-center position-relative`}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/products?category=${category.url}`}>
                    <div className='flex-grow-1'>
                        {/* <h5 className={`listname ${category.url == 14 ? "cate-menu-active" : ""}`}>{category.name}</h5> */}
                        <h5 className={`listname ${urlQuery === category.url ? "cate-menu-active" : ""}`}>{category.name}</h5>
                    </div>
                    <span className="flex-shrink-0 ms-2 badge bg-light text-muted fs-12">
                        21
                    </span>
                </Link>
            </li>
        </>
    )
}

export default Category
