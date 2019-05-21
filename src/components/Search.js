import React from 'react';
import {  withRouter } from 'react-router-dom';
import qs from 'query-string';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { searchTweets, changeSearchValue} from '../actions/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        // this.changeURl = this.changeURl.bind(this);
        this.state = {};
    }

    componentWillMount() {
        const { changeSearchValue, listOfPost, searchTweet } = this.props;
        const { location : {search : query} } = this.props;
        const { q } = qs.parse(query);  
        if(q !== undefined) {
            changeSearchValue(q); 
        }
        if (listOfPost===''){
            searchTweet(q);
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
                    <h4>{searchText}</h4>
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

const putStateToProps = (state) => {
    return {
        searchText: state.text,
        listOfPost: state.posts,
    };
};

const putActionsToProps = (dispatch) => {
    return {
        searchTweet: bindActionCreators(searchTweets,dispatch),
        changeSearchValue: bindActionCreators(changeSearchValue, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(withRouter(Search));