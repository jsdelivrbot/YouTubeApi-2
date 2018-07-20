import React, { Component } from 'react';

// SearchBar class containing logic for the searchbar
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // State that contains the search term
    this.state = { term: '' };
  }

  // Return the jsx that will render the component
  render () {

    // Always use setState whenever we want to change the state
    return (
      <div className="search-bar">
        <input
          /* 
          <This is a multiline comment>
          <never extend comments above a length of 72 chars (as per java standards, check for JS)>
          <This ensure readability, never letting the line cross the screen>
          Value is not getting its value until we hit return and trigger an event.
          Now we set value whenever the field is changed.
          We set the state which means the component get re-rendered.
          */
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;