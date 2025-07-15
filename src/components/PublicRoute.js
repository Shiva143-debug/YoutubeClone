// src/components/PublicRoute.js
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext"

const PublicRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext)

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? <Navigate to="/" replace /> : element
}

export default PublicRoute
