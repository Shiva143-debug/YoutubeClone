// import Cookies from 'js-cookie'
// import {Redirect, Route} from 'react-router-dom'

// const ProtectedRoute = props => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute

import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  return jwtToken ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
