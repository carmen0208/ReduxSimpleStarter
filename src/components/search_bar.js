import React, {Component } from 'react';
// const Component = React.Component

//functional component
// const SearchBar = () => {
//     return <input />;
// };

//class component
class SearchBar extends Component {
    render() {
        return <input onChange={(event) =>  console.log(event.target.value)}/>;
    }
    // inputText(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
