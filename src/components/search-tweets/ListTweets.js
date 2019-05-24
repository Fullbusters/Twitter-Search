import React from 'react';
import Tweet from './Tweet';
import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


class ListTweets extends React.Component {

  render() {
    const { ListOfTweets } = this.props;
    return (
      <div className='lists'>
        { ListOfTweets ? (
            ListOfTweets.map(function(item, i) {
              return <Tweet tweet={item} key={i} />})
          ) : <h2>wait</h2>}
      </div>
    )
  };
}

const putStateToProps = (state) => {
  return {
    ListOfTweets: state.postReducer.tweets
  };
};

export default connect(putStateToProps)(withRouter(ListTweets));