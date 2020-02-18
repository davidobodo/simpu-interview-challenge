import React from 'react';
import { CommentsWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ALL_COMMENTS } from './constants';
import Comment from './comment';




const Comments = () => {
    return (
        <CommentsWrapper>
            <h3>Comments</h3>
            <div className="comment-wrapper">
                {ALL_COMMENTS.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </div>
            <div className="form-field">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img3" />
                <div className="form-field__input">
                    <input type="text" placeholder="Write a comment..." />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </CommentsWrapper>
    )
};

export default Comments;