import React from 'react';
import Header from '../Header';
import ListMyPosts from './ListMyPosts';
import CreatePost from './CreatePost';


class PageSearch extends React.Component {

  render() {
    return (
      <div >
          <div>
            <Header/>
              <CreatePost/>
          </div>
          <div className='listContainer'>
            <ListMyPosts/>
          </div>
      </div>
    );
  }
}
  
export default PageSearch;