import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux';
import { fetchProduct } from '../../store/products/product.slice';

const DetailPage = () => {


  const {id} = useParams();
  const productId = Number(id);
  const dispatch = useAppDispatch();


  useEffect(() => {
    
    dispatch(fetchProduct(productId));
  }, [productId])
  

  return (
    <div>DetailPage</div>
  )
}

export default DetailPage