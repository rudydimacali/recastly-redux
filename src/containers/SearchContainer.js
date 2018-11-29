import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = dispatch => ({
  handleSearchInputChange: (e) => dispatch(handleSearchChange(e))
})

var SearchContainer = connect(mapDispatchToProps)(Search);

export default SearchContainer;
