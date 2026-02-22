function DishItem({dish, count, increaseItem, decreaseItem}) {
  return (
    <div className="dish-card">
      <div className="dish-details">
        <h3>{dish.dish_name}</h3>
        <p className="price">SAR {dish.dish_price}</p>
        <p className="description">{dish.dish_description}</p>

        {dish.dish_Availability ? (
          <div className="counter">
            <button type="button" onClick={() => decreaseItem(dish.dish_id)}>
              -
            </button>
            <span>{count}</span>
            <button type="button" onClick={() => increaseItem(dish.dish_id)}>
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}

        {dish.addonCat.length > 0 && (
          <p className="custom">Customizations available</p>
        )}
      </div>

      <div className="dish-right">
        <p className="calories">{dish.dish_calories} calories</p>
        <img src={dish.dish_image} alt={dish.dish_name} />
      </div>
    </div>
  )
}

export default DishItem
