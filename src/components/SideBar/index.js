import {Link, useLocation} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  OptionItem,
  OptionsContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactUsDescription,
} from './styledComponents'
import './index.css'

const SideBar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SideBarContainer darkMode={isDarkTheme}>
            <OptionsContainer>
              <Link to="/" className="link-item">
                <OptionItem selected={currentPath === '/'} darkMode={isDarkTheme}>
                  {isDarkTheme ? <AiFillHome className="icon" /> : <AiOutlineHome className="icon" />}
                  Home
                </OptionItem>
              </Link>

              <Link to="/trending" className="link-item">
                <OptionItem selected={currentPath === '/trending'} darkMode={isDarkTheme}>
                  {isDarkTheme ? <HiFire className="icon" /> : <HiOutlineFire className="icon" />}
                  Trending
                </OptionItem>
              </Link>

              <Link to="/gaming" className="link-item">
                <OptionItem selected={currentPath === '/gaming'} darkMode={isDarkTheme}>
                  <SiYoutubegaming className="icon" />
                  Gaming
                </OptionItem>
              </Link>

              <Link to="/saved-videos" className="link-item">
                <OptionItem selected={currentPath === '/saved-videos'} darkMode={isDarkTheme}>
                  <BiListPlus className="icon" />
                  Saved Videos
                </OptionItem>
              </Link>
            </OptionsContainer>

            <ContactUsContainer darkMode={isDarkTheme}>
              <ContactUsHeading>CONTACT US</ContactUsHeading>
              <SocialMediaContainer>
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <ContactUsDescription>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsDescription>
            </ContactUsContainer>
          </SideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
