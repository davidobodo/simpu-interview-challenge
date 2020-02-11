import React from 'react';
import replyIcon from '../../../assets/img/reply.svg';
import { MessageWrapper } from './style';

const Message = ({ message }) => {
    const { name, reply, content, time, status, is_user_msg } = message;

    const renderTick = () => {
        switch (status) {
            case 'sent':
                return <span></span>;
            case 'delivered':
                return <span className="tick"></span>;
            case 'read':
                return (<>
                    <span className="tick"></span>
                    <span className="tick"></span>
                </>
                );
            default:
                return <span></span>;
        }
    };

    return (
        <MessageWrapper>
            <div className="message__header">
                <h4>{name}</h4>
                {reply && <h4 className="reply">
                    <img src={replyIcon} alt='img' />
                    Reply this conversation
                </h4>}
            </div>
            <p className={is_user_msg ? 'is_user_msg' : ''}>{content}</p>
            <div className="message__footer">
                <h6>{time}</h6>
                {renderTick()}
            </div>
        </MessageWrapper>
    )
};

export default Message;