import styled from 'styled-components'

export const PopupContainer = styled.div`
  margin-left: 10px;
`

export const LogoutButton = styled.button`
  padding: 14px 14px;
  background-color: transparent;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#f9f9f9' : '#3b82f6')};
  color: ${({ darkMode }) => (darkMode ? '#f9f9f9' : '#3b82f6')};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${({ darkMode }) =>
      darkMode ? '#383838' : '#3b82f6'};
    color: white;
  }
      @media screen and (max-width: 767px) {
    display: none;
  }
    `

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: inline-block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ModalContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#313131' : '#ffffff')};
  padding: 30px;
  border-radius: 12px;
  text-align: center;
`

export const WarningMessage = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const PopupButton = styled.button`
  padding: 10px 16px;
  background-color: ${props =>
    props.outline ? 'transparent' : '#3b82f6'};
  color: ${props =>
    props.outline ? '#3b82f6' : '#ffffff'};
  border: 1px solid #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.85;
  }
`
