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

    const renderHeader = () => {
        if (header.length >= 65) {
            header = header.substr(0, 39) + "..."
        }
        return <h5>{header}</h5>
    }

    const renderContent = () => {
        if (content.length >= 65) {
            content = content.substr(0, 45) + "..."
        }
        return <h6>{content}</h6>
    }


    return (
        <ChatPreviewWrapper>
            <div className='left'><img src={socialIcon} alt="social" /></div>
            <div className='center'>
                <h4>{name}</h4>
                {renderHeader()}
                {renderContent()}
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