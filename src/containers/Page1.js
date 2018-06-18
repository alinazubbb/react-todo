import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJson } from '../actions/jsonAction';

class Page1 extends Component {

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
    return (
      <div className="page1">
        Page 1 content
        <ul>
          {this.props.jsonList.map( this.listItemMapper )}
        </ul>
      </div>
    );
  }

  componentDidMount(){
    this.props.getJson();
  }
}

Page1.propTypes = {
  jsonList: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  ({ jsonList }) => ({ jsonList }),
  { getJson }
)(Page1);
