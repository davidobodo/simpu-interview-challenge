import React from 'react';
import { CommentsWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';




const Comments = () => {
    return (
        <CommentsWrapper>
            <h3>Comments</h3>
            <div className="comment-details">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img1" />
                <h6>
                    Having a baby can be a nerve wracking experience for new parents
                    – not the nine months of pregnancy.
                </h6>
            </div>
            <div className="comment-details">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img2" />
                <h6>
                    Having a baby can be a nerve wracking experience for new parents
                    – not the nine months of pregnancy.
                </h6>
            </div>
            <div className="comment-details">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img3" />
                <h6>
                    Having a baby can be a nerve wracking experience for new parents
                    – not the nine months of pregnancy.
                </h6>
            </div>
            <div className="comment-details">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img4" />
                <h6>
                    Having a baby can be a nerve wracking experience for new parents
                    – not the nine months of pregnancy.
                </h6>
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