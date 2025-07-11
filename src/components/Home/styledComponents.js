import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
`
export const HomeContentContainer = styled.div`
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
export const SearchInputContainer = styled.div`
  // position: relative;
  width: 60%;
  margin-top: 5%;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 10%;
    width: 80%;
  }
`

// Styled input
export const InputBox = styled.input`
  border-radius: 5px;
  height: 40px;
  padding: 10px 40px 10px 10px; 
  background-color: transparent;
  color:${props => (props.darkMode ? 'white' : 'black')};
  border: 1px solid #94a3b8;
  width: 100%;
  margin-left:3%
`

// Styled icon button inside input
export const SearchIconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
 @media (max-width: 768px) {
   flex-direction:column
   }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 80vh;
`
export const Button = styled.button`
  border: 1px solid #94a3b8;
  background-color: #ffffff;
  border-radius: 5px;
  height: 39px;
  width: 60px;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  width: 75vw;
  margin:2%;
   margin-top: 50px;
  flex-direction: column;
  padding: 15px;
  @media (max-width: 768px) {
   display:none
   }
`
export const BannerLogo = styled.img`
  width: 15%;
`

export const BannerHeading = styled.p`
  width: 40%;
  font-size: 25px;
`
export const BannerButton = styled.button`
  border: 2px solid #94a3b8;
  background-color: transparent;
  border-radius: 5px;
  height: 50px;
  width: 15%;
  cursor: pointer;
`

export const CloseButton = styled.button`
  border: none;
  background-color: #ffffff;
  align-self: flex-end;
  height: 30px;
  width: 30px;
  cursor: pointer;
`

export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`

export const NoResultsMsg = styled.h1`
  color: gray
`

export const Suggestion = styled.p`
  color: gray
`
export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`
