import React from 'react';
import styled from 'styled-components';
import Chats from './Chats'

const BodyWrapper = styled.div`
    flex: 1;

    h2{
        padding: 21px 0 8px 21px;
        border-bottom: 1px solid #EFF3F5;
    }

    .body__content{
        height: calc(100vh - 55px);
    }
`;

const Body = () => {
    return (
        <BodyWrapper>
            <h2>Conversations</h2>
            <div className="body__content">
                <Chats />
            </div>
        </BodyWrapper>
    )
};

export default Body;