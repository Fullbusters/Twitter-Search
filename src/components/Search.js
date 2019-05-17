import React from 'react';
import {  withRouter } from 'react-router-dom';
import qs from 'query-string';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.queryPath = this.queryPath.bind(this);
        this.search = this.search.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.state = {text: this.queryPath() || ''};
    }

    queryPath() {
        const { location : {search : query} } = this.props;
        const { pathValue } = qs.parse(query);        
        return pathValue || ''; 
    }

    handleChange(e){
        this.setState({text : e.target.value});
    }

    onKeyPress(e) {
		if (e.key === 'Enter') {
			this.search();
		}
	}

    search(){
        const searchString = qs.stringify({pathValue: this.state.text});
        this.props.history.push({pathname: '/search', search: searchString} );
    }
    
    render() {
        const text = this.state.text;
        return (
            <div className = 'search'>
                <input value = {text}
                onKeyPress={this.onKeyPress}
                onChange = {this.handleChange}/>
                <button onClick = {this.search} >Search</button>
            </div>
        )
    };
}

export default withRouter(Search);