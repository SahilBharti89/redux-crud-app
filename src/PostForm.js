import React, { useRef } from 'react';
import { connect } from 'react-redux';

const PostForm = (props) => {
    let getTitle = useRef();
    let getMessage = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = getTitle.value;
        const message = getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        console.log("data",data)
        props.dispatch({
            type: 'ADD_POST',
            data
        });
        getTitle.value = '';
        getMessage.value = '';
    }
    return (
        <div className="post-container">
          <h1 className="post_heading">Create Post</h1>
          <form className="form" onSubmit={handleSubmit}>
           <input required type="text" ref={(input) => getTitle = input } placeholder="Enter Post Title" /><br /><br />
           <textarea required rows="5" cols="28" ref={(input) => getMessage = input } placeholder="Enter Post" /><br /><br />
           <button>Post</button>
          </form>
        </div>
    );
}


export default connect() (PostForm);