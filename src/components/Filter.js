import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  handleClick = (e) => {
    this.setState({
      checked: !this.state.checked
    });
    this.props.onClick(e);
  }

  render() {
    return (<div>
      <input type="checkbox"
             value={this.props.value}
             onChange={this.handleClick}
             checked={this.state.checked}/>
      <label>{this.props.value}</label>
    </div>);
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
