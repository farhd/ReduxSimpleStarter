import React, { Component } from 'react' 
import ReactDOM from 'react-dom' 
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'
const API_KEY='AIzaSyC60OiFbAzfs2uyUNW0mYrh5I3iGzfn1nU'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
              videos: videos,
              selectedVideo: videos[0]
            })
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar onTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                  videos={this.state.videos} 
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                />
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector('.container') )