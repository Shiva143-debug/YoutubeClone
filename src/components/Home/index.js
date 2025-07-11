import {Component} from 'react'
import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import {Oval} from 'react-loader-spinner'
import {
  HomeContainer,
  HomeContentContainer,
  InputBox,
  SearchInputContainer,
  SearchIconButton,
  VideosContainer,
  LoaderContainer,
  Button,
  BannerContainer,
  CloseButton,
  BannerLogo,
  BannerHeading,
  BannerButton,
  NoSearchResultsContainer,
  NoResultsMsg,
  Suggestion,
  RetryButtonInFailure,
  FailureImage,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInputValue: '',
    moviesList: [],
    apiStatus: apiStatusConstants.initial,
    bannerVisible: true,
    isMobile: window.innerWidth <= 768,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInputValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedMoviesList = data.videos.map(eachMovieDetails => ({
        id: eachMovieDetails.id,
        title: eachMovieDetails.title,
        publishedAt: eachMovieDetails.published_at,
        thumbnailUrl: eachMovieDetails.thumbnail_url,
        viewCount: eachMovieDetails.view_count,
        channelName: eachMovieDetails.channel.name,
        profileImageUrl: eachMovieDetails.channel.profile_image_url,
      }))

      this.setState({
        moviesList: updatedMoviesList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

onChangeSearchInput = event => {
  this.setState(
    { searchInputValue: event.target.value },
    this.getVideos // Trigger search after setting state
  )
}

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Oval type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onSearchButtonClicked = () => {
    this.getVideos()
  }

  closeBannerClicked = () => {
    this.setState({bannerVisible: false})
  }
  
startHomePage = () => {
  this.setState({ searchInputValue: '' }, this.getVideos)
}


  renderNoSearchResults = () => (
    <NoSearchResultsContainer>
      <FailureImage alt="no videos" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"/>
      <NoResultsMsg>No Search results found</NoResultsMsg>
      <Suggestion>Try different keywords or remove search filter</Suggestion>
      <RetryButtonInFailure onClick={this.startHomePage}>Retry</RetryButtonInFailure>
    </NoSearchResultsContainer>
  )

  renderHomeVideos = () => {
    const {moviesList} = this.state
    return (
      <VideosContainer>
        {moviesList.length === 0
          ? this.renderNoSearchResults()
          : moviesList.map(eachMovieDetails => (
              <VideoItem
                key={eachMovieDetails.id}
                eachMovieDetails={eachMovieDetails}
              />
            ))}
      </VideosContainer>
    )
  }

  retryButtonClicked = () => {
    this.getVideos()
  }

  render() {
    const {searchInputValue, apiStatus, bannerVisible} = this.state
    let renderBasedOnApiStatus

    switch (apiStatus) {
      case apiStatusConstants.failure:
        renderBasedOnApiStatus = (
          <FailureView retryButtonClicked={this.retryButtonClicked} />
        )
        break
      case apiStatusConstants.success:
        renderBasedOnApiStatus = this.renderHomeVideos()
        break
      case apiStatusConstants.inProgress:
        renderBasedOnApiStatus = this.renderLoader()
        break
      default:
        renderBasedOnApiStatus = ''
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bannerClass = bannerVisible ? 'visible' : 'hide'

          return (
            <div darkMode={isDarkTheme} style={{width:"100vw"}}>
              <Header />
              <HomeContainer darkMode={isDarkTheme} data-testid="home">
                <div>
              {!this.state.isMobile && <SideBar />}
              </div>
                <HomeContentContainer>
                  <BannerContainer className={bannerClass} data-testid="banner">
                    <CloseButton data-testid="close" onClick={this.closeBannerClicked}>
                      <GrClose />
                    </CloseButton>
                    <BannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="nxt watch logo"/>
                    <BannerHeading>Buy Nxt Watch Premium</BannerHeading>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerContainer>

                  <SearchInputContainer>
                    <InputBox id="search" type="search" value={searchInputValue} placeholder="Search" onChange={this.onChangeSearchInput} darkMode={isDarkTheme}/>
                  </SearchInputContainer>

                  {renderBasedOnApiStatus}
                </HomeContentContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
