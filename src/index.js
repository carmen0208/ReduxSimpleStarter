import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'you_youtube_api_key';

// Create a new component should produce some HTML
const App = () => {
    return <div>Hi</div>;
}
// Take the component's generated HTML and put it on the page(in the DOM)

// React.render(App);
// ReactDOM.render(React.createElement(App));
ReactDOM.render(<App />,document.querySelector('.container') );