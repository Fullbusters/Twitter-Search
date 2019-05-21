import React from 'react';

class Post extends React.Component {
    render() {
        const {text, created_at, user: {name : userName}} = this.props.post;
        return (
            <div className = 'post'>
                <div className = 'postHeader'>
                    {userName}
                    <p>{created_at}</p>
                </div>
                <div className = 'postContent'>
                    {text}
                </div>
                
            </div>
        )
    }
}

export default Post;