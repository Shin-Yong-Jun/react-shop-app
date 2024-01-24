import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import OrdersList from './order-list/OrdersList'


const OrderPage = () => {
  //로그인한 사람만 들어오는 페이지이기에 useAuth를 사용한다.
  
  const {isAuth} = useAuth()
  
  if(!isAuth) return <Navigate to="/"/>;
  
  return (
    <div className="page">
      <div className="container">
        <h1>주문 히스토리</h1>
          <OrdersList />
      </div>
    </div>
  )
}

export default OrderPage