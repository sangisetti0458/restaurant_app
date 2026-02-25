import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../context/CartContext'

const Header = props => {
  const {history, restaurantName} = props

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        const cartCount = cartList.reduce((acc, item) => acc + item.quantity, 0)

        const onLogout = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <div className="header">
            <h1>{restaurantName}</h1>

            <div>
              <p>My Orders</p>

              <button
                type="button"
                data-testid="cart"
                onClick={() => history.push('/cart')}
              >
                Cart {cartCount}
              </button>

              <button type="button" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
