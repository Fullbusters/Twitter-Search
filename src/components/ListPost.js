import React from 'react';
import Post from './Post';
import {  withRouter } from 'react-router-dom';
import qs from 'query-string';

class ListPost extends React.Component {
    constructor(props) {
        super(props);

        this.loadPosts = this.loadPosts.bind(this);
        this.check = this.check.bind(this);
        this.state = {searchQuery: '', ListOfPost : ''};
    }

    check() {
        const { location : {search : query} } = this.props;
        const { pathValue } = qs.parse(query); 
        if(this.state.searchQuery !== pathValue){
            this.setState({searchQuery : pathValue })
            this.loadPosts();
        } 
    }

    loadPosts() {
        const { location : {search : query} } = this.props;
        const { pathValue } = qs.parse(query);
        fetch('http://localhost:8000/api/twitter/search?q=' + pathValue )
        .then(res => res.json())
        .then(
            (result) => {
                console.log('wait')
                this.setState({ListOfPost : result.statuses});
                console.log('change list search query = ' + pathValue)
            }
        )
    }

    render() {
        this.check();
        
        return (
            <div>
                {   this.state.ListOfPost ? (
                        this.state.ListOfPost.map(function(item, i) {
                            return <Post post={item} key={i} />})
                    ) : <h2>wait</h2>}
            </div>
        )
    };
}

export default withRouter(ListPost);