import React from 'react';


class Post extends React.Component {
    
  render() {
    const {text, name, categories } = this.props.post;
    console.log(categories)
    return (
      <div className = 'post'>
      	<div className = 'postHeader'>
          {name}
        </div>
        <div className = 'postContent'>
          {text}
        </div>
        <ul className = 'flex'>
          {categories.map(function(item, i) {
            return <span className = 'category'>{item.name}</span>
          })}
        </ul>
      </div>
    )
  }
}

export default Post;