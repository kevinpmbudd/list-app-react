import React, { Component } from 'react';
import './App.css';
import QuoteTable from './components/QuoteTable';
import Search from './components/Search';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      filters: ['movies', 'games']
    };
  }

  handleUserInput = (text) => {
    this.setState({
      search: text
    });
  }

  filter = (e) => {
    let filters = this.state.filters;
    let index = filters.indexOf(e.target.value);
      if (index > -1) {
        filters.splice(index, 1);
      } else {
        filters.push(e.target.value);
      }
    this.setState({
      filters: filters
    });
  }

  fetchAPI = () => {
    fetch('https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        data: data
       });
    })
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return (
      <div className="App">
        <Search searchText={this.state.search} onUserInput={this.handleUserInput}/>
        <Filter value="movies" onClick={this.filter}/>
        <Filter value="games" onClick={this.filter}/>
        <QuoteTable data={this.state.data} searchText={this.state.search} filters={this.state.filters}/>
      </div>
    );
  }
}

export default App;
