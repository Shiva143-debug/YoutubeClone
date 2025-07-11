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
  margin-top: 50px;
  width: 100%;
  margin-left:20%
    @media (max-width: 768px) {
  margin-left:0px
  }
      @media (min-width: 769px) {
     margin-left:20%
  }
`
export const PlayerAndVideoDetailsContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
`
export const ReactPlayerContainer = styled.div`
  width: 100%;
`

export const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? 'white' : '#181818')};
`
export const DynamicDataStyling = styled.p`
  font-size: 15px;
  color: ${props => (props.darkMode ? 'white' : 'black')};
  margin-right: 15px;
  margin-top: 0px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => (props.darkMode ? 'white' : 'black')};
`

export const LeftDynamicContainer = styled.div`
  width: 40%;
  display: flex;
`


export const RightDynamicContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
`

export const Action = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 14px;
  cursor: pointer;
  padding: 4px 6px;
  transition: color 0.3s ease;

  svg {
    font-size: 18px;
    margin-right: 6px;
  }

  &:hover {
    color: #2563eb;
  }
`

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


export const HorizontalLine = styled.hr`
  color: red;
  background-color: green;
`


export const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.darkMode ? '#f1f5f9' : '#0f172a')};
  margin: 0 0 8px;
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`

export const ChannelName = styled.p`
  color: ${props => (props.darkMode ? '#94a3b8' : '#475569')};
  margin: 0;
`

export const SubscriberCount = styled.p`
  color: ${props => (props.darkMode ? '#94a3b8' : '#475569')};
  margin: 0;
`

export const Dot = styled.span`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#475569')};
`
