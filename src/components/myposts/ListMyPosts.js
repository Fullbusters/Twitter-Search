import React from 'react';
import { connect } from 'react-redux'
import Post from './Post'


class ListMyPost extends React.Component {

  render() {
    const { ListOfPost } = this.props;
    return (
      <div className='lists'>
        { ListOfPost.length>0 ? (
            ListOfPost.map(function(item, i) {
              return <Post post={item} key={i} />})
          ) : <h2>post don`t exist please create post</h2>
        } 
      </div>
    )
  }
} 

const putStateToProps = (state) => {
  return {
    ListOfPost: state.postReducer.myPosts || [],
  };
};

export default connect(putStateToProps, null)(ListMyPost);