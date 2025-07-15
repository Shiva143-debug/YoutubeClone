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


// src/components/ProtectedRoute.js
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext)

  return isAuthenticated ? element : <Navigate to="/login" replace />
}

export default ProtectedRoute
