import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = dish => {
    const existingItem = cartList.find(item => item.dish_id === dish.dish_id)

    if (existingItem) {
      setCartList(prev =>
        prev.map(item =>
          item.dish_id === dish.dish_id
            ? {...item, quantity: item.quantity + dish.quantity}
            : item,
        ),
      )
    } else {
      setCartList(prev => [...prev, dish])
    }
  }

  const incrementCartItemQuantity = id => {
    setCartList(prev =>
      prev.map(item =>
        item.dish_id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    setCartList(prev =>
      prev
        .map(item =>
          item.dish_id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const removeCartItem = id => {
    setCartList(prev => prev.filter(item => item.dish_id !== id))
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
