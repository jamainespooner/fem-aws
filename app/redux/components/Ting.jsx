import React from 'react';
import { connect } from 'react-redux';

const Ting = ({ isIt }) =>
  <div>Ting</div>

const mapStateToProps = state => ({
  isIt: state,
})

export default connect(mapStateToProps)(Ting)