import styled from 'styled-components'

export const ListItem = styled.li`
    width:100%


`

export const VideoImage = styled.img`
  width: 98%;
  @media (max-width: 768px) {
   width:95vw
   }
  

`
export const DetailsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
   width:95vw
   }
`
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:20px
  @media (max-width: 768px) {
   width:100vw
   }
`
export const Profile = styled.img`
    height: 50px;
    width: 50px:
    border-radius: 50px;
     margin-top:20px 
    
`
export const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
    @media (max-width: 768px) {
   width:100vw
   }
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

export const DynamicDataContainer = styled.div`
  display: flex;
`
