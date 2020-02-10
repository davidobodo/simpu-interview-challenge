import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    flex: 1;

    h2{
        padding: 21px 0 8px 21px;
        border-bottom: 1px solid #EFF3F5;
    }
`;

const Body = () => {
    return (
        <BodyWrapper>
            <h2>Conversations</h2>
        </BodyWrapper>
    )
};

export default Body;