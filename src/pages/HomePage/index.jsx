import React from 'react'
import CardList from '../../components/CardList'
import CardSkeleton from '../../components/CardSkeleton'
import CountProducts from '../../components/CountProducts'
import FiltersCategory from '../../components/FiltersCategory'

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