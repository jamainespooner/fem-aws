import React from 'react';
import { connect } from 'react-redux';

const Ting = ({ isIt }) =>
  <h1>S3 Tings</h1>

const mapStateToProps = state => ({
  isIt: state,
})

export default connect(mapStateToProps)(Ting)
