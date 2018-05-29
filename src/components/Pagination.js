import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Pagination extends Component {
  render() {
    let quotesCount = this.props.quotesCount;
    let pages = Math.ceil(quotesCount / 15);
    let pageButtons = [];

    for(let i = 0; i < pages; i++) {
      pageButtons.push(<button value={i+1}
                               key={i}
                               className="page-button"
                               onClick={this.props.handleClick}>
                               {i+1}
                       </button>);
    }
    return (
      <div className="pageination">
        {pageButtons}
        <p>page {this.props.currentPage} of {pages}</p>
      </div>
    );
  }
}

Pagination.propTypes = {
  handleClick: PropTypes.func.isRequired,
  quotesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
