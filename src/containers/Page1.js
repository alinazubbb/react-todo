import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchJson } from '../actions/jsonAction';
import Input from '../components/Input';

class Page1 extends Component {
  state = {
    inputValue: ''
  };

  changeSearchValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  filteredList = () => {
    const filtered = this.props.jsonState.data.filter(
      el => ~el.title.indexOf(this.state.inputValue))
    // console.log('filtered', filtered);
    return filtered;
  };

  listItemMapper = ({ id, userId, title, body }) => (
    <li key={id} className="postItem">
      <span className="marker">ID</span>
      {id}
      <br />
      <span className="marker">USER ID</span>
      {userId}
      <br />
      <span className="marker">TITLE</span>
      {title}
      <br />
      <span className="marker">BODY</span>
      {body}
    </li>
  );

  render() {
    if (this.props.jsonState.error) {
      return <div>error</div>;
    }
    if (this.props.jsonState.pending) {
      return <div>loading</div>;
    }
    return (
      <div className="page1">
        <h1>Page 1 content</h1>
        <h2>SEARCH</h2>
        <Input
          type="text"
          placeholder="Search"
          changeHandler={this.changeSearchValue}
        />
        <ul className="posts">
          {this.filteredList().map(this.listItemMapper)}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchJson();
  }
}

Page1.propTypes = {
  jsonState: PropTypes.object
};

export default connect(
  ({ jsonState }) => ({ jsonState }),
  { fetchJson }
)(Page1);
