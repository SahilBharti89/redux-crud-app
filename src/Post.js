import React from 'react';
import { connect } from 'react-redux';

const Post = (props) => {
    // alert(JSON.stringify(props))
    return (
        <div className="post">
            <h2 className="post_title">{props.post.title}</h2>
            <p className="post_message">{props.post.message}</p>
            <div className="control-buttons">
                <button className="edit" onClick={()=> props.dispatch({type:'EDIT_POST', id: props.post.id})}>Edit</button>
                <button className="delete" onClick={() => props.dispatch({type:'DELETE_POST', id: props.post.id})}>Delete</button>
            </div>
        </div>
    );
}

export default connect() (Post);