import styled from 'styled-components'

export const NavDesktopContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 15px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  box-shadow: ${props =>
    props.darkMode
      ? '0px 2px 4px 4px rgba(228, 227, 227, 0.1)'
      : '4px 4px 8px  4px rgba(31, 28, 28, 0.1)'};
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  width: 100%;


`
export const NavBarDesktopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 98%;
`

export const WebsiteLogo = styled.img`
  width: 40%;
    @media (max-width: 768px) {
   width: 30%;
   }
`
export const OptionsContainer = styled.div`
  display: flex;
  height: 50px;
      @media (max-width: 768px) {
   width: 60%;
   }

`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  @media (max-width: 768px) {
   width: 100px;
   }
`

export const Profile = styled.img`
  width: 10%;
  margin-right: 30px;
`

export const ThemeLogo = styled.img`
  width: 50%;
`
export const HamburgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top:-10px;
  margin-left:-20px;
  margin-right:10px;
  color: ${props => (!props.darkMode ? 'black' : 'white')};
  @media (min-width: 768px) {
   display:none
   }
`

export const MobileOptionsContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  // background-color: ${props => (props.darkMode ? 'white' : 'black')};
  color: ${props => (!props.darkMode ? 'black' : 'white')};
  .icon {
    margin-right: 10px;
  }
      &:hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'black' : 'white'};
    color: white;
  }
    
`

