import { Link } from 'react-router-dom'
import {useState} from "react"
import ThemeContext from '../../context/ThemeContext'
import { AiOutlineMenu, AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { HiOutlineFire, HiFire } from 'react-icons/hi'
import { SiYoutubegaming } from 'react-icons/si'
import { BiListPlus } from 'react-icons/bi'
import PopupDesign from '../PopupDesign'
import "./index.css"
import {
  NavDesktopContainer,
  NavBarDesktopContent,
  WebsiteLogo,
  OptionsContainer,
  ThemeLogo,
  ThemeButton,
  Profile,
  OptionItem,
  HamburgerMenuButton,
  MobileOptionsContainer
} from './styledComponents'

const Header = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme, toggleTheme } = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <NavDesktopContainer darkMode={isDarkTheme}>
          <NavBarDesktopContent>
            <Link to="/home">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>

            <OptionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <ThemeLogo src={themeImageURL} />
              </ThemeButton>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <HamburgerMenuButton onClick={toggleMenuVisibility} darkMode={isDarkTheme}>
                <AiOutlineMenu className="icon-i" size={20} />
              </HamburgerMenuButton>

              {isMenuVisible && (
                <MobileOptionsContainer>
                  <Link to="/home" className="link-item">
                    <OptionItem>
                      {isDarkTheme ? (
                        <AiFillHome className="icon" />
                      ) : (
                        <AiOutlineHome className="icon" />
                      )}
                      Home
                    </OptionItem>
                  </Link>

                  <Link to="/trending" className="link-item">
                    <OptionItem>
                      {isDarkTheme ? (
                        <HiFire className="icon" />
                      ) : (
                        <HiOutlineFire className="icon" />
                      )}
                      Trending
                    </OptionItem>
                  </Link>

                  <Link to="/gaming" className="link-item">
                    <OptionItem>
                      <SiYoutubegaming className="icon" />
                      Gaming
                    </OptionItem>
                  </Link>

                  <Link to="/saved-videos" className="link-item">
                    <OptionItem>
                      <BiListPlus className="icon" />
                      Saved Videos
                    </OptionItem>
                  </Link>
                </MobileOptionsContainer>
              )}
              
              <br />
              <PopupDesign />
            </OptionsContainer>
          </NavBarDesktopContent>
        </NavDesktopContainer>
      )
    }}
  </ThemeContext.Consumer>
)
}
export default Header
