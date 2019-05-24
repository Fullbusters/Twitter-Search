import React from 'react';
import Header from '../Header';
import Search from './Search';
import ListTweets from './ListTweets';


class PageSearch extends React.Component {

  render() {
    return (
      <div >
        <div>
          <Header/>
          <Search/>
        </div>
        <div className='listContainer'>
          <ListTweets/>
                
        </div>
      </div>
    );
  }
}
  
export default PageSearch;



