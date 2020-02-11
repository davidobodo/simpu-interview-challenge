import React from 'react';
import { ChatWindowWrapper } from './style';
import attachment from '../../assets/img/attachment.svg';
import reply from '../../assets/img/reply.svg';




const ChatWindow = () => {
    return (
        <ChatWindowWrapper>
            <h3>WhatsApp for Business: Don't forget to start your free trial</h3>
            <div className="message">
                <div className="message__header">
                    <h4>Zarela Reed</h4>
                    <h4 className="reply">
                        <img src={reply} alt='img' />
                        Reply this conversation</h4>
                </div>
                <p>Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div className="message__footer">
                    <h6>12:59pm</h6>
                    <span className="tick">
                        <span className="tick__one"></span>
                        <span className="tick__two"></span>
                    </span>
                </div>
            </div>
            <div className="message">
                <div className="message__header">
                    <h4>Zarela Reed</h4>
                    <h4 className="reply">
                        <img src={reply} alt='img' />
                        Reply this conversation</h4>
                </div>
                <p className="received">Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div className="message__footer">
                    <h6>12:59pm</h6>
                    <span className="tick">
                        <span className="tick__one"></span>
                        <span className="tick__two"></span>
                    </span>
                </div>
            </div>
            <div className="message">
                <div className="message__header">
                    <h4>Zarela Reed</h4>
                    <h4 className="reply">
                        <img src={reply} alt='img' />
                        Reply this conversation</h4>
                </div>
                <p className="received">Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div className="message__footer">
                    <h6>12:59pm</h6>
                    <span className="tick">
                        <span className="tick__one"></span>
                        <span className="tick__two"></span>
                    </span>
                </div>
            </div>

            <div className="input-field">
                <input type="text" placeholder="Type a message ..." />
                <img src={attachment} alt="attachment" />
            </div>
        </ChatWindowWrapper>
    )
};

export default ChatWindow;