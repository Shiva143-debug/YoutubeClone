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

//   /*
//   toggleTabId = id => {
//     this.setState({activeTabId: id})
//   }
//   */

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

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import useAuthentication from './useAuthentication';
import ThemeContext from './context/ThemeContext';
import LoginForm from './components/Login';
import Home from './components/Home';
import Gaming from './components/Gaming';
import Trending from './components/Trending';
import SavedVideos from './components/SavedVideos';
import VideoItemDetails from './components/VideoItemDetails';
import NotFound from './components/NotFound';
import {useEffect,useState} from "react"

const App = () => {
  const isAuthenticated = useAuthentication();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [savedVideosList, setSavedVideosList] = React.useState([]);
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
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const saveVideoButtonClicked = (data) => {
    setSavedVideosList(prevList => [...prevList, data]);
  };

  return (
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
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        
        {/* <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} /> */}

        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/saved-videos" element={<SavedVideos />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/videos/:id" element={<VideoItemDetails />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

          <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
