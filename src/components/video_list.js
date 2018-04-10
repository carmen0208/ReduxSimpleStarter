import React from 'react';
import VideoListItem from './video_list_item'
import VideoDetail from './video_detail'

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });
    return (
        <ul className="col-md-4">
            {/* {props.videos.length} */}

            {videoItems}
        </ul>

    );
};

export default VideoList;