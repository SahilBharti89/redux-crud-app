import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditPost from  './EditPost';

const AllPost = (props) => {
    return (
        <div>
          <h1 className="post_heading">All Posts</h1>
          {props.posts.map(post => (
            <div key={post.id}>
              {post.editing ? <EditPost post={post}  key={post.id} />:
                <Post key={post.id} post={post} />
              }
            </div>))}
        </div>
    );
}

const mapStateToProps = state => {
  return {
      posts: state
  }
}


export default connect(mapStateToProps) (AllPost);