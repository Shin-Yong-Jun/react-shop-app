import React from 'react'
import CardList from '../HomePage/card-list/CardList'
import CardSkeleton from '../HomePage/card-skeleton/CardSkeleton'
import CountProducts from '../HomePage/count-products/CountProducts'
import FiltersCategory from '../HomePage/filters-category/FiltersCategory'

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts />
        <CardList />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default HomePage