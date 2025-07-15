import React, {  useContext } from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'
import { LuLogOut } from "react-icons/lu";

import {
  PopupContainer,
  LogoutButton,
  ModalContainer,
  PopupButton,
  ButtonsContainer,
  WarningMessage,
  LogoutTriggerWrapper,
  IconButton
  
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const PopupDesign = props => {
  const { logout } = useContext(AuthContext)
  // const onLogoutClicked = () => {
  //   const {history} = props
  //   Cookies.remove('jwt_token')

  //   history.replace('/login')
  // }
  const navigate = useNavigate();
  const onLogoutClicked = () => {
    // Cookies.remove('jwt_token');
    // navigate('/login', { replace: true });
     logout()
     navigate('/login', { replace: true })
  };

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <PopupContainer>
            <Popup 
              modal
              trigger={
              <LogoutTriggerWrapper>
                  <LogoutButton type="button" darkMode={isDarkTheme}>
                    Logout
                  </LogoutButton>
                  <IconButton>
                    <LuLogOut size={40} />
                  </IconButton>
                </LogoutTriggerWrapper>
              }
               
            >
              {close => (
                <ModalContainer darkMode={isDarkTheme}>
                  <WarningMessage darkMode={isDarkTheme}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <PopupButton type="button" outline onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </PopupButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default PopupDesign
