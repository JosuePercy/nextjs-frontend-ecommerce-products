import Banner from '@/components/banner/Banner'
import Contact from '@/components/contact/Contact'
import Filters from '@/components/filters/Filters'
import React from 'react'

const Page = () => {
  return (
    <main>
      <Banner />
      <Filters />
      <Contact />
    </main>
  )
}

export default Page