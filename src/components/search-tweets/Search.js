import React from 'react';
import {  withRouter } from 'react-router-dom';
import qs from 'query-string';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { searchTweets, changeSearchValue} from '../../actions/actions';
// import PropTypes from 'prop-types';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.changeURl = this.changeURl.bind(this);
    this.state = {};
  }

  componentWillMount() {
    const { changeSearchValue, searchTweet } = this.props;
    const { location : {search : query} } = this.props;
    const { q } = qs.parse(query);  
    if(q !== undefined) {
      changeSearchValue(q); 
      searchTweet(q);
    } else {
      changeSearchValue('JavaScript'); 
      searchTweet('JavaScript');
      }
  }

  changeURl(searchText){
      const searchString = qs.stringify({q: searchText});
      this.props.history.push({pathname: '/search', search: searchString} );
  }
    
  render() {
    const { searchText, changeSearchValue, searchTweet } = this.props;
    return (
			<div className = 'search'>
        <input value = {searchText}
          onKeyPress = {e=> {
          	if(e.key==='Enter'){
          		this.changeURl(searchText);
          		searchTweet(searchText);
          	}
          }}
          onChange = {(event) => {
            changeSearchValue(event.target.value);
          }}
        />
        <button 
          onClick = {e=>{
            this.changeURl(searchText);
            searchTweet(searchText);
          }}
        >
        	Search
        </button>
      </div>
    )
  };
}

Search.defaultProps = {
  searchText: 'JavaScript'
};

const putStateToProps = (state) => {
  return {
    searchText: state.postReducer.text,
    listOfPost: state.postReducer.posts,
  };
};

const putActionsToProps = (dispatch) => {
  return {
    searchTweet: bindActionCreators(searchTweets,dispatch),
    changeSearchValue: bindActionCreators(changeSearchValue, dispatch)
  };
};

export default connect(putStateToProps, putActionsToProps)(withRouter(Search));