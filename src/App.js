import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishItem from './components/DishItem'

const API_URL =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

function App() {
  const [restaurantName, setRestaurantName] = useState('')
  const [menuList, setMenuList] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()

      setRestaurantName(data[0].restaurant_name) // 🔥 IMPORTANT
      setMenuList(data[0].table_menu_list)
    }

    fetchMenu()
  }, [])

  const increaseItem = id => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const decreaseItem = id => {
    setCartItems(prev => {
      if (!prev[id]) return prev
      const updated = {...prev}
      updated[id] -= 1
      if (updated[id] === 0) delete updated[id]
      return updated
    })
  }

  const totalCartCount = Object.values(cartItems).reduce(
    (acc, val) => acc + val,
    0,
  )

  if (menuList.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <Header restaurantName={restaurantName} cartCount={totalCartCount} />

      <CategoryTabs
        categories={menuList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div className="dish-container">
        {menuList[activeIndex].category_dishes.map(dish => (
          <DishItem
            key={dish.dish_id}
            dish={dish}
            count={cartItems[dish.dish_id] || 0}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
          />
        ))}
      </div>
    </div>
  )
}

export default App
