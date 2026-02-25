import CartContext from '../context/CartContext'
import Header from './Header'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value

      const renderEmptyView = () => (
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
          alt="empty cart"
        />
      )

      const renderCartList = () => (
        <>
          <button type="button" onClick={removeAllCartItems}>
            Remove All
          </button>

          {cartList.map(item => (
            <div key={item.dish_id}>
              <img src={item.dish_image} alt={item.dish_name} />

              <h3>{item.dish_name}</h3>

              <button
                type="button"
                onClick={() => decrementCartItemQuantity(item.dish_id)}
              >
                -
              </button>

              <p>{item.quantity}</p>

              <button
                type="button"
                onClick={() => incrementCartItemQuantity(item.dish_id)}
              >
                +
              </button>

              <button
                type="button"
                onClick={() => removeCartItem(item.dish_id)}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )

      return (
        <>
          <Header restaurantName="UNI Resto Cafe" />
          {cartList.length === 0 ? renderEmptyView() : renderCartList()}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
