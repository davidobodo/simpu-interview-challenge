import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
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
`;

const Comment = ({ comment }) => {
    const { img, content } = comment
    return (
        <CommentWrapper>
            <img src={img} alt="img1" />
            <h6>
                {content}
            </h6>
        </CommentWrapper>
    )
}

export default Comment;