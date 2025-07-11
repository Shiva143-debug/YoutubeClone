import styled from 'styled-components'


export const VideoCardContainer = styled.div`
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  height: 100%;
  box-shadow: 4px 4px 12px 8px rgba(62, 33, 189, 0.1);
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
       @media (max-width:768px){
      width:95vw
    }
   
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;


`

export const VideoContent = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
`

export const VideoTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top:20px
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
  line-height: 1.4;
  flex: 1;
`

export const VideoMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;
  gap: 4px;
  padding:2%
`

export const VideoMetaText = styled.p`
  color: ${props => (props.darkMode ? '#cbd5e1' : '#475569')};
  margin: 0;
`
