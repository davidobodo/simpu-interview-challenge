import React from 'react';
import { ChatWrapper } from './style';
import Message from './message';
import attachment from '../../assets/img/attachment.svg';

import { DIALOGUE } from './constants';




const Chat = ({ message }) => {
    return (
        <ChatWrapper>
            <h3>WhatsApp for Business: Don't forget to start your free trial</h3>
            <div className="message-wrapper">
                {DIALOGUE.map((message) => {
                    return <Message key={message.id} message={message} />
                })}
            </div>
            <div className="input-field">
                <input type="text" placeholder="Type a message ..." />
                <img src={attachment} alt="attachment" />
            </div>
        </ChatWrapper>
    )
};

export default Chat;