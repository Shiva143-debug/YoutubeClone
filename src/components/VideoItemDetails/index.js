import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Oval } from 'react-loader-spinner';
import ReactPlayer from 'react-player';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiListPlus } from 'react-icons/bi';

import {
  LoaderContainer,
  VideoDetailsContainer,
  VideoContentContainer,
  PlayerAndVideoDetailsContainer,
  ReactPlayerContainer,
  Description,
  DynamicDataContainer,
  DynamicDataStyling,
  LeftDynamicContainer,
  RightDynamicContainer,
  Action,
  ProfileContainer,
  Profile,
  ChannelNameViewCountAndPublishedStyling,
  TextContent,
  Title,
  Button,
  ChannelInfo,
  DetailsContainer,
  AboutContainer,
  ChannelName,
  Dot,
  SubscriberCount,
  HorizontalLine,
} from './styledComponents';
import ThemeContext from '../../context/ThemeContext';
import Header from '../Header';
import './index.css';
import SideBar from '../SideBar';
import FailureView from '../FailureView';

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const VideoItemDetails = () => {
  const { id } = useParams();
  const { isDarkTheme, saveVideoButtonClicked ,savedVideos,toggleSaveVideo } = useContext(ThemeContext);
  const [videoDetails, setVideoDetails] = useState({});
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const isMobile = useIsMobile();
 

  useEffect(() => {
    if (id) {
      fetchVideoData(id);
    }
  }, [id]);

useEffect(() => {
  const likeStatus = localStorage.getItem(`like-${videoDetails.id}`);
  const dislikeStatus = localStorage.getItem(`dislike-${videoDetails.id}`);

  setIsLike(likeStatus === 'true');
  setIsDislike(dislikeStatus === 'true');
}, [videoDetails.id]);

  useEffect(() => {
  const found = savedVideos.find(item => item.id === videoDetails.id)
  setIsSaved(!!found)
}, [savedVideos, videoDetails.id])
  
    const fetchVideoData = async () => {
      setApiStatus(apiStatusConstants.inProgress);
      const jwtToken = Cookies.get('jwt_token');
      const apiUrl = `https://apis.ccbp.in/videos/${id}`;
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await fetch(apiUrl, options);
      if (response.ok === true) {
        const data = await response.json();
        const updatedVideoDetails = {
          id: data.video_details.id,
          title: data.video_details.title,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          viewCount: data.video_details.view_count,
          videoUrl: data.video_details.video_url,
          description: data.video_details.description,
          channelName: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        };

        setVideoDetails(updatedVideoDetails);
        setApiStatus(apiStatusConstants.success);
      } else {
        setApiStatus(apiStatusConstants.failure);
      }
    };

  

  const renderPlayer = () => (
    <ReactPlayerContainer>
      <ReactPlayer
        url={videoDetails.videoUrl}
        controls
        width="100%"
        height="70vh"
      />
    </ReactPlayerContainer>
  );

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Oval type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  );

  const renderVideoDetailsOnSuccess = () => {
    const likeIconClassName = isLike ? 'selected' : 'not-selected';
    const dislikeIconClassName = isDislike ? 'selected' : 'not-selected';
    const saveButtonIconClassName = isSaved ? 'selected' : 'not-selected';
    const saveButtonText = isSaved ? 'Saved' : 'Save';

    // const onSaveButtonClicked = () => {
    //   setIsSaved(!isSaved);
    //   saveVideoButtonClicked({ videoDetails });
    // };
    const onSaveButtonClicked = () => {
  toggleSaveVideo(videoDetails)
  setIsSaved(prev => !prev)
}

    // const onLikeButtonClicked = () => {
    //   setIsLike(true);
    //   setIsDislike(false);
    // };

    // const onDislikeButtonClicked = () => {
    //   setIsDislike(true);
    //   setIsLike(false);
    // };

    const onLikeButtonClicked = () => {
  const newLikeStatus = !isLike;
  setIsLike(newLikeStatus);
  setIsDislike(false);

  localStorage.setItem(`like-${videoDetails.id}`, newLikeStatus);
  localStorage.setItem(`dislike-${videoDetails.id}`, 'false');
};

const onDislikeButtonClicked = () => {
  const newDislikeStatus = !isDislike;
  setIsDislike(newDislikeStatus);
  setIsLike(false);

  localStorage.setItem(`dislike-${videoDetails.id}`, newDislikeStatus);
  localStorage.setItem(`like-${videoDetails.id}`, 'false');
};


    return (
      <PlayerAndVideoDetailsContainer>
        {renderPlayer()}
        <Description darkMode={isDarkTheme}>
          {videoDetails.description}
        </Description>
        <DynamicDataContainer darkMode={isDarkTheme}>
          <LeftDynamicContainer>
            <DynamicDataStyling darkMode={isDarkTheme}>
              {videoDetails.viewCount}
            </DynamicDataStyling>
            <DynamicDataStyling darkMode={isDarkTheme}>
              {videoDetails.publishedAt}
            </DynamicDataStyling>
          </LeftDynamicContainer>
          <RightDynamicContainer>
        <Action onClick={onLikeButtonClicked} active={isLike}>
          <AiOutlineLike />
          <span>Like</span>
        </Action>

        <Action onClick={onDislikeButtonClicked} active={isDislike}>
          <AiOutlineDislike />
          <span>Dislike</span>
        </Action>

        <Action onClick={onSaveButtonClicked} active={isSaved}>
          <BiListPlus />
          <span>{saveButtonText}</span>
        </Action>
      </RightDynamicContainer>
        </DynamicDataContainer>
        <HorizontalLine />

<DetailsContainer>
  <Profile src={videoDetails.profileImageUrl} alt="channel logo" />

  <TextContent>
    <Title darkMode={isDarkTheme}>{videoDetails.title}</Title>

    <ChannelInfo>
      <ChannelName darkMode={isDarkTheme}>
        {videoDetails.channelName}
      </ChannelName>
      <Dot>•</Dot>
      <SubscriberCount darkMode={isDarkTheme}>
        {videoDetails.subscriberCount}
      </SubscriberCount>
    </ChannelInfo>
  </TextContent>
</DetailsContainer>

      </PlayerAndVideoDetailsContainer>
    );
  };

  const retryButtonClicked = () => {
    setApiStatus(apiStatusConstants.inProgress);
    fetchVideoData();
  };

  let renderBasedOnApiStatus;

  switch (apiStatus) {
    case apiStatusConstants.failure:
      renderBasedOnApiStatus = <FailureView retryButtonClicked={retryButtonClicked} />;
      break;
    case apiStatusConstants.success:
      renderBasedOnApiStatus = renderVideoDetailsOnSuccess();
      break;
    case apiStatusConstants.inProgress:
      renderBasedOnApiStatus = renderLoader();
      break;
    default:
      renderBasedOnApiStatus = '';
  }

  return (
    <>
      <Header />
      <VideoDetailsContainer darkMode={isDarkTheme} data-testid="videoItemDetails">
      {!isMobile ? (<SideBar />):""}
        <VideoContentContainer>{renderBasedOnApiStatus}</VideoContentContainer>
      </VideoDetailsContainer>
    </>
  );
};

export default VideoItemDetails;
