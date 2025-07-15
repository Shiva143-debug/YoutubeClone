import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthContext from './context/AuthContext'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from "./components/PublicRoute"
import './App.css'


const AppRoutes = () => {
  const { isLoading } = useContext(AuthContext)

  if (isLoading) return <div>Loading...</div>

  return (
    <Routes>
      <Route path="/login" element={<PublicRoute element={<LoginForm />} />} />
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/trending" element={<ProtectedRoute element={<Trending />} />} />
      <Route path="/gaming" element={<ProtectedRoute element={<Gaming />} />} />
      <Route path="/saved-videos" element={<ProtectedRoute element={<SavedVideos />} />} />
      <Route path="/videos/:id" element={<ProtectedRoute element={<VideoItemDetails />} />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideosList, setSavedVideosList] = useState([])
  const [savedVideos, setSavedVideos] = useState(() => {
    const saved = localStorage.getItem('savedVideos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos))
  }, [savedVideos])

  const toggleSaveVideo = video => {
    const isAlreadySaved = savedVideos.find(item => item.id === video.id)
    if (isAlreadySaved) {
      setSavedVideos(prev => prev.filter(item => item.id !== video.id))
    } else {
      setSavedVideos(prev => [...prev, video])
    }
  }

  const toggleTheme = () => setIsDarkTheme(prev => !prev)

  const saveVideoButtonClicked = data => {
    setSavedVideosList(prev => [...prev, data])
  }

  return (
    <AuthProvider>
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme,
          toggleSaveVideo,
          saveVideoButtonClicked,
          savedVideos,
          savedVideosList,
        }}
      >
        <AppRoutes />
      </ThemeContext.Provider>
    </AuthProvider>
  )
}

export default App
