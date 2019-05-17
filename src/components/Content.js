import React from 'react';
import Header from './Header';
import Search from './Search';
import ListPost from './ListPost';

class Content extends React.Component {
    render() {
      return (
        <div >
            <div>
                <Header/>
                <Search/>
            </div>
            <div>
                <ListPost/>
            </div>
        </div>
      );
    }
  }
  
  export default Content;



