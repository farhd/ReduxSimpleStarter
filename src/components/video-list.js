import React from 'react'
import VideoListItem from './video-list-item'

const VideoList = ({videos, onVideoSelect}) => {
  const videoItems = videos.map( (video, i) => {
    return <VideoListItem 
            key={i} 
            video={video} 
            onVideoSelect={onVideoSelect}
          />
  })

  return (
    <ul className="col-md-4 list-group">
    { videoItems }
    </ul>
  )
}

export default VideoList