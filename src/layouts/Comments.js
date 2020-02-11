import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 19px 10px;
    flex-shrink: 0;
    flex-basis: 300px;

    h3{
        margin-bottom: 15px;
    }

    .comment-details{
        display: flex;
        margin-bottom: 15px;

        img{
            width 28px;
            height: 28px;
            border-radius: 50%;
            margin-right: 5px;
        }

        h6{
            flex: 1;
            background-color: #f6fafd;
            border-radius: 24px;
            padding: 11px;
        }
    }

    .form-field{
        display: flex;
        align-items: center;
        margin-top: auto;

        img{
            margin-right: 5px;
            width 33px;
            height: 33px;
            border-radius: 50%;
        }

        &__input{
            background-color: #f6fafd;
            border-radius: 24px;
            padding: 4px 11px;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;

            input{
                outline: none;
                border: none;
                background-color: transparent;
                font-size: 12px;
            }

            svg{
                background-color: #6554c0;
                color: #ffffff;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                padding: 6px;
            }
        }

    }
`;

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