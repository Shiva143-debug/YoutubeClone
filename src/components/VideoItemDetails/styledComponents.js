import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`
export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const VideoContentContainer = styled.div`
  min-height: 100px;
  width: 100%;
  margin-top: 50px;
  // padding: 25px;
`
export const PlayerAndVideoDetailsContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
`
export const ReactPlayerContainer = styled.div`
  width: 100%;
`
export const DetailsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 50px;
`
export const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
  margin-top: 30px;
  margin-bottom; 0px;
`
export const DynamicDataStyling = styled.p`
  font-size: 15px;
  color: ${props => (!props.darkMode ? '#181818' : '#64748b')};
  margin-right: 15px;
  margin-top: 0px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftDynamicContainer = styled.div`
  width: 40%;
  display: flex;
`

export const RightDynamicContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`
/*
export const LikeOrDislikeOrSaveContainer = styled.div`
  display: flex;
  margin-right: 10px;
`
*/
export const Button = styled.button`
  background-color: transparent;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')} !important;
`

export const DislikeButton = styled.button`
  background-color: transparent;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')} !important;
`

export const SaveButton = styled.button`
  background-color: transparent;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
  min-height: 70px;
  margin-bottom: 0px;
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 15px;
  color: #616e7c;
  margin-top: 0px;
  margin-right: 15px;
`
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
export const Profile = styled.img`
    height: 50px;
    width: 50px:
    border-radius: 50px;
`

export const HorizontalLine = styled.hr`
  color: red;
  background-color: green;
`
