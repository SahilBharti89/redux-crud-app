import React, { useRef } from 'react';
import { connect } from 'react-redux';

const EditPost = (props) => {
    let getTitle = useRef();
    let getMessage = useRef();

    const handleEdit = event => {
        event.preventDefault();
        const newTitle = getTitle.value;
        const newMessage = getMessage.value;

        const data = {
            newTitle,
            newMessage
        }

        props.dispatch({type: 'UPDATE', id: props.post.id, data: data});
    }
    return (
        <div key={props.post.id} className="post">
            <form className="form" onSubmit={handleEdit}>
                <input required type="text" ref={(input)=> getTitle = input} defaultValue={props.post.title}
                placeholder="Enter Post Title" /> <br /><br />
                <textarea required rows="5" ref={(input)=> getMessage = input} defaultValue={props.post.message} 
                cols="28" placeholder="Enter Post" /> <br /><br />
                <button style={{color:'yellow'}}>Update</button>
            </form>
        </div>
    )
}
export default connect() (EditPost);