import React from 'react'
import './FilterProducts.css'

import { ICategory } from '@/interfaces/products.interface'

interface Props {
    category: ICategory
}


const Category = ({ category }: Props) => {
  return (
      <li key={category.name}>
          <a className='d-flex cate-menu-active align-items-center position-relative' href="https://cartuser.kodepixel.com/category/electronics/4">
              <div className='flex-grow-1'>
                  {/* <h5 className={`listname ${category.url == 14 ? "cate-menu-active" : ""}`}>{category.name}</h5> */}
                  <h5 className={'listname'}>{category.name}</h5>
              </div>
              <span className="flex-shrink-0 ms-2 badge bg-light text-muted fs-12">
                  21
              </span>
          </a>
      </li>
  )
}

export default Category
