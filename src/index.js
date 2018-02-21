import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBa9OZcD0kP89dVulxCmI28Xrsc-RR4i2Y';

// Create a new component should produce some HTML
const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}
// Take the component's generated HTML and put it on the page(in the DOM)

// React.render(App);
// ReactDOM.render(React.createElement(App));
ReactDOM.render(<App />, document.querySelector('.container') );