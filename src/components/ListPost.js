import React from 'react';
import Post from './Post';
import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


class ListPost extends React.Component {

    render() {
        const { ListOfPost } = this.props;
        
        return (
            <div>
                {   ListOfPost ? (
                        ListOfPost.map(function(item, i) {
                            return <Post post={item} key={i} />})
                    ) : <h2>wait</h2>}
            </div>
        )
    };
}

const putStateToProps = (state) => {
    return {
        searchText: state.text,
        ListOfPost: state.posts
    };
};

export default connect(putStateToProps)(withRouter(ListPost));