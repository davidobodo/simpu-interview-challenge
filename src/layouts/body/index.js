import React from 'react';
import Chats from './chats';
import ChatWindow from './chatWindow';
import { BodyWrapper } from './style';

const Body = () => {
    return (
        <BodyWrapper>
            <h2>Conversations</h2>
            <div className="body__content">
                <Chats />
                <ChatWindow />
            </div>
        </BodyWrapper>
    )
};

export default Body;