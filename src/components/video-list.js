import React from 'react'

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
        {
            props.videos.map( (item) => {
                return <li key={item.id.videoId}>{item.snippet.title}</li>
            })
        }
        </ul>
    )
}

export default VideoList