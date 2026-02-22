function Header({restaurantName, cartCount}) {
  return (
    <div className="header">
      <h1>{restaurantName}</h1>
      <div className="cart-section">
        <span>My Orders</span>
        <div className="cart">
          🛒
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
