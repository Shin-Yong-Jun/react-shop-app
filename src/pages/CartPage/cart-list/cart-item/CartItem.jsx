import React from 'react'

const CartItem = () => {
  return (
    <div>CartItem</div>
  )
}

export default CartItem

// import React from 'react'
// import { deleteFromCart, incrementCount, incrementProduct, decrementProduct } from '../../../../store/cart/cart.slice';

// const CartItem = ({item}) => {

//   const dispatch = useAppDispatch();

//   const deleteProduct = () => {
//     dispatch(deleteFromCart(item.id))
//   }

//   const incrementCount = () => {
//     dispatch(incrementProduct(item.id))
//   }

//   const decrementCount = () => {
//     dispatch(decrementProduct(item.id))
//   }


//   return (
//     <div>CartItem</div>
//   )
// }

// export default CartItem