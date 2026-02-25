import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const {component: Component, ...rest} = props
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
  )
}

export default ProtectedRoute
