import React, { useEffect } from 'react'
import styles from './CardList.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchProducts } from '../../../store/products/products.slice';
import CardItem from '../card-list/cart-item/CardItem';

const CardList = () => {
  const dispatch = useAppDispatch()
  const {products} = useAppSelector(state => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts(styles));
  }, [])
  

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item = {product}/>)}
    </ul>
    )
}

export default CardList