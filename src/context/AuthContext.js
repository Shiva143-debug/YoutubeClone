// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Add loading check

  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setIsLoading(false) // Mark done after checking cookie
  }, [])

  const login = (token) => {
    Cookies.set('jwt_token', token, { expires: 30, path: '/' })
    setIsAuthenticated(true)
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
