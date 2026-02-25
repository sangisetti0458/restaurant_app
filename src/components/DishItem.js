import {useState, useContext} from 'react'
import CartContext from '../context/CartContext'

const DishItem = ({dish}) => {
  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const onDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
    }
  }

  const onAddToCart = () => {
    addCartItem({...dish, quantity})
    setQuantity(0)
  }

  return (
    <div className="dish-card">
      <div className="dish-left">
        <h3>{dish.dish_name}</h3>

        <p>
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p>{dish.dish_description}</p>

        {dish.dish_Availability ? (
          <>
            <div className="quantity-box">
              <button type="button" onClick={onDecrement}>
                -
              </button>

              <p>{quantity}</p>

              <button type="button" onClick={onIncrement}>
                +
              </button>
            </div>

            {quantity > 0 && (
              <button type="button" className="add-btn" onClick={onAddToCart}>
                ADD TO CART
              </button>
            )}
          </>
        ) : (
          <p className="not-available">Not available</p>
        )}

        {dish.addonCat.length !== 0 && (
          <p className="custom">Customizations available</p>
        )}

        <p className="calories">{dish.dish_calories} calories</p>
      </div>

      <div className="dish-right">
        <img src={dish.dish_image} alt={dish.dish_name} />
      </div>
    </div>
  )
}

export default DishItem
