import React from 'react';
import { ChatWindowWrapper } from './style';
import Message from './message';
import attachment from '../../assets/img/attachment.svg';

import { DIALOGUE } from './constants';




const ChatWindow = ({ message }) => {
    console.log(message)
    return (
        <ChatWindowWrapper>
            <h3>WhatsApp for Business: Don't forget to start your free trial</h3>
            {DIALOGUE.map((message) => {
                return <Message key={message.id} message={message} />
            })}
            <div className="input-field">
                <input type="text" placeholder="Type a message ..." />
                <img src={attachment} alt="attachment" />
            </div>
        </ChatWindowWrapper>
    )
};

export default ChatWindow;