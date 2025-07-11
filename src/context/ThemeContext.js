import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  saveVideoButtonClicked: () => {},
  toggleSaveVideo :()=>{}
})

export default ThemeContext
