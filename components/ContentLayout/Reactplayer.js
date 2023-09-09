import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

function Reactplayer(props) {
  const awardPoper = props.onComplete;
  const videoUrl = useSelector(
    (state) => state.course.contentData.media_manual_link
  );
  return (
    <div>
      <ReactPlayer
        width={'100%'}
        height={'58vh'}
        controls={true}
        style={{ borderRadius: '9px' }}
        url={videoUrl}
        onEnded={() => awardPoper()}
      />
    </div>
  );
}

export default Reactplayer;
