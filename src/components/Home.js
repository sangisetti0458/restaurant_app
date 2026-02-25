import {useEffect, useState} from 'react'
import Header from './Header'
import CategoryTabs from './CategoryTabs'
import DishItem from './DishItem'

const API_URL =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

const Home = () => {
  const [menuList, setMenuList] = useState([])
  const [restaurantName, setRestaurantName] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setRestaurantName(data[0].restaurant_name)
      setMenuList(data[0].table_menu_list)
    }
    fetchData()
  }, [])

  if (menuList.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header restaurantName={restaurantName} />

      <CategoryTabs
        categories={menuList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {menuList[activeIndex].category_dishes.map(dish => (
        <DishItem key={dish.dish_id} dish={dish} />
      ))}
    </>
  )
}

export default Home
