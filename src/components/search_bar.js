import React, {Component } from 'react';
// const Component = React.Component

//functional component
// const SearchBar = () => {
//     return <input />;
// };

//class component
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: "Starting Value" };
    }
    render() {
        // return <input onChange={(event) =>  console.log(event.target.value)}/>;
        //return <input onChange={(event) =>  this.setState({ term: event.target.value} )}/>
        return (
        <div className="search-bar">
            <input value={this.state.term}
            onChange={(event) =>  this.onInputChange(event.target.value)}/>
        </div>
        );
    }
    // inputText(event) {
    //     console.log(event.target.value);
    // }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
