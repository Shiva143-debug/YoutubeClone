import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;

`

export const SavedVideosContentContainer = styled.div`
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

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
    @media (max-width: 768px) {
   flex-direction: column;
   }
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const NoSavedVideos = styled.img`
  width: 50%;
`
export const NoSavesVideosText = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
    @media (max-width: 768px) {
   text-align:center
   }
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  margin-top: 4%;
  margin-left:2%;
  margin-right:2%;
  font-size: 25px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 768px) {
  font-size:30px
  }
`
