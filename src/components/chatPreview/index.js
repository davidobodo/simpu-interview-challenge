import React from 'react';
import { ChatPreviewWrapper } from './style';
import socialIcon from '../../assets/img/social-icon.svg';
import attachment from '../../assets/img/attachment.svg';

const ChatPreview = ({
    name,
    header,
    content,
    sent,
    unread
}) => {

    const renderUnread = () => {
        if (unread) {
            return <div className='right__unread'>{unread}</div>
        } else {
            return <div></div>
        }
    };

    return (
        <ChatPreviewWrapper>
            <div className='left'><img src={socialIcon} alt="social" /></div>
            <div className='center'>
                <h4>{name}</h4>
                <h5>{header}</h5>
                <h6>{content}</h6>
            </div>
            <div className='right'>
                <div className='right__time'>{sent}</div>
                {renderUnread()}
                <div className='right__clip'><img src={attachment} alt="attachment" /></div>
            </div>
        </ChatPreviewWrapper>
    )
};

export default ChatPreview;