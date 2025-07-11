import {Link} from 'react-router-dom'
import './index.css'

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoContent,
  VideoTopRow,
  ChannelLogo,
  VideoTitle,
  VideoMetaRow,
  VideoMetaText,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {eachMovieDetails} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${eachMovieDetails.id}`} className="video-link-item">
              <VideoCardContainer>
                <VideoThumbnail
                  src={eachMovieDetails.thumbnailUrl}
                  alt="video thumbnail"
                />
                <VideoContent>
                  <VideoTopRow>
                    <ChannelLogo
                      src={eachMovieDetails.profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoTitle darkMode={isDarkTheme}>
                      {eachMovieDetails.title}
                    </VideoTitle>
                  </VideoTopRow>
                  <VideoMetaRow>
                    <VideoMetaText darkMode={isDarkTheme}>
                      {eachMovieDetails.channelName}
                    </VideoMetaText>
                    <VideoMetaText darkMode={isDarkTheme}>
                      {eachMovieDetails.viewCount} Views
                    </VideoMetaText>
                    <VideoMetaText darkMode={isDarkTheme}>
                      {eachMovieDetails.publishedAt}
                    </VideoMetaText>
                  </VideoMetaRow>
                </VideoContent>
              </VideoCardContainer>
          
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
