import React, { Component } from 'react';
import Pagination from './Pagination';
import { PropTypes } from 'prop-types';

class QuoteTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  handlePageClick = (e) => {
    this.setState({
      page: e.target.value
    });
  }

  render() {
    let filters = this.props.filters;
    let filteredQuotes = this.props.data.filter((item) => {
      return filters.includes(item.theme.toLowerCase());
    });
    let page = this.state.page
    let startItem = (page - 1) * 15
    let endItem = page * 15
    let paginatedData = filteredQuotes.slice(startItem, endItem)
    let quotes_current_page = paginatedData.map((item, index) => {
      return <tr key={index}>
                 <td>{item.source}</td>
                 <td>{item.context}</td>
                 <td>{item.quote}</td>
                 <td>{item.theme}</td>
               </tr>;
    });

    let searchText = this.props.searchText.toLowerCase();
    let searchedQuotes = filteredQuotes
      .filter((item) => item.quote.toLowerCase().indexOf(searchText) !== -1)
      .map((item, index) => {
        return <tr key={index}>
                   <td>{item.source}</td>
                   <td>{item.context}</td>
                   <td>{item.quote}</td>
                   <td>{item.theme}</td>
                 </tr>;
      })

    if (searchText) {
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Context</th>
                <th>Quote</th>
                <th>Theme</th>
              </tr>
            </thead>
            <tbody>
              { searchedQuotes }
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Context</th>
              <th>Quote</th>
              <th>Theme</th>
            </tr>
          </thead>
          <tbody>
            { quotes_current_page }
          </tbody>
        </table>
        <Pagination currentPage={parseInt(this.state.page, 10)}
                    handleClick={this.handlePageClick}
                    quotesCount={this.props.data.length}/>
      </div>
    );
  }
}

QuoteTable.propTypes = {
  data: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired
};

export default QuoteTable;
