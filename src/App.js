// import './App.css'
// import {Component} from 'react'
// import {Route, Switch, Redirect} from 'react-router-dom'
// import Login from './components/Login'
// import Home from './components/Home'
// import ProtectedRoute from './components/ProtectedRoute'
// import ThemeContext from './context/ThemeContext'
// import Gaming from './components/Gaming'
// import Trending from './components/Trending'
// import SavedVideos from './components/SavedVideos'
// import VideoItemDetails from './components/VideoItemDetails'
// import NotFound from './components/NotFound'

// class App extends Component {
//   state = {isDarkTheme: false, savedVideosList: []}

//   toggleTheme = () => {
//     this.setState(prevState => ({
//       isDarkTheme: !prevState.isDarkTheme,
//     }))
//   }


//   saveVideoButtonClicked = data => {
//     const {savedVideosList} = this.state
//     this.setState({savedVideosList: [...savedVideosList, data]})
//   }

//   render() {
//     const {isDarkTheme, savedVideosList} = this.state

//     return (
//       <ThemeContext.Provider
//         value={{
//           isDarkTheme,
//           toggleTheme: this.toggleTheme,
//           saveVideoButtonClicked: this.saveVideoButtonClicked,
//           savedVideosList,
//         }}
//       >
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <ProtectedRoute exact path="/" component={Home} />
//           <ProtectedRoute exact path="/trending" component={Trending} />
//           <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
//           <ProtectedRoute exact path="/gaming" component={Gaming} />
//           <ProtectedRoute
//             exact
//             path="/videos/:id"
//             component={VideoItemDetails}
//           />
//           <Route path="/not-found" component={NotFound} />
//           <Redirect to="not-found" />
//         </Switch>
//       </ThemeContext.Provider>
//     )
//   }
// }

// export default App


import './App.css'
import { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = { isDarkTheme: false, savedVideosList: [] }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  saveVideoButtonClicked = data => {
    const { savedVideosList } = this.state
    this.setState({ savedVideosList: [...savedVideosList, data] })
  }

  render() {
    const { isDarkTheme, savedVideosList } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          saveVideoButtonClicked: this.saveVideoButtonClicked,
          savedVideosList,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/saved-videos" element={<SavedVideos />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/videos/:id" element={<VideoItemDetails />} />
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ThemeContext.Provider>
    )
  }
}

export default App
