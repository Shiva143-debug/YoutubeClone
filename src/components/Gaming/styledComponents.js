import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`
export const GamingContentContainer = styled.div`
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
export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
    @media (max-width: 768px) {
  font-size:30px
  }
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  list-style-type: none;
  padding-left: 0px;
  
  @media (max-width: 768px) {
   flex-direction:column
   }
  
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 80vh;
`
