import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
const VideoListItem = ({video}) => {
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return <li className='list-group-item'>
    <div className="video-list media">
        <div className="media-left">
            <img className="media-objec" src={imageUrl}/>
        </div>
        <div className="media-body">
            <div className="media-heading" >{video.snippet.title}</div>
        </div>
    </div>
    Video 
    </li>;
};

export default VideoListItem;