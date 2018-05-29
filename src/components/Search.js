import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Search extends Component {
  handleChange = (e) => {
    this.props.onUserInput(e.target.value);
  }
  render() {
    return (<div>
      <input type="text"
             placeholder="Search..."
             value={this.props.searchText}
             onChange={this.handleChange}/>
    </div>);
  }
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired
};

export default Search;
