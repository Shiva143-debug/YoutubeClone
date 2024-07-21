import styled from 'styled-components'

export const ListItem = styled.li`
width:100%;
height:50%`
export const VideoImage = styled.img`
   width: 100%;
   height:200px;
  @media (max-width: 768px) {
   width:95vw;
   height:300px
   }
`
export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
    @media (max-width: 768px) {
   width:90vw
   }
`

export const ViewCount = styled.p`
  font-size: 15px;
  color: #616e7c;
  margin-right: 15px;
    @media (max-width: 768px) {
   width:90vw
   }
`
