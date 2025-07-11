

import styled from 'styled-components'

export const SideBarContainer = styled.div`
  min-height: 100vh;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  box-shadow: ${props =>
    props.darkMode
      ? '0px 2px 4px 4px rgba(228, 227, 227, 0.1)'
      : '2px 0 10px rgba(0, 0, 0, 0.1)'};
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  margin-top:5.3%;
`;

export const OptionsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ selected, darkMode }) =>
    selected ? (darkMode ? '#313131' : '#e2e8f0') : 'transparent'};
  color: ${({ selected, darkMode }) =>
    selected ? 'blue' : darkMode ? '#f1f5f9' : '#0f172a'};
  &:hover {
    background-color: ${({ darkMode }) =>
      darkMode ? '#272727' : '#f1f5f9'};
  }

  svg {
    margin-right: 12px;
    font-size: 20px;
  }
`;

export const ContactUsContainer = styled.div`
  padding: 20px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#1e293b')};
  margin-bottom:50px
`;

export const ContactUsHeading = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
`;

export const SocialMediaIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ContactUsDescription = styled.p`
  font-size: 13px;
  line-height: 1.4;
  margin-top: 8px;
`;
