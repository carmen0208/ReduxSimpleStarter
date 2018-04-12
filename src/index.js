import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBa9OZcD0kP89dVulxCmI28Xrsc-RR4i2Y';

// Create a new component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [],
        selectVideo: null };

        YTSearch({key: API_KEY, term: 'snowboard'}, (videos) => {
            // this.setState({videos})
            this.setState({
                videos:videos, 
                selectVideo:videos[0]
            }); //syntax sugar
        });
    }

    render() {
        return (<div>
            <SearchBar />
            <VideoDetail video={this.state.selectVideo} />
            <VideoList 
            onVideoSelect={(selectVideo)=> {this.setState({selectVideo})}}
            videos={this.state.videos}/>
        </div>);
    }
}
// Take the component's generated HTML and put it on the page(in the DOM)

// React.render(App);
// ReactDOM.render(React.createElement(App));
ReactDOM.render(<App />, document.querySelector('.container') );