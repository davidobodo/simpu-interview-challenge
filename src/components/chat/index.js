import React from 'react';
import { ChatWrapper } from './style';
import socialIcon from '../../assets/img/social-icon.svg';
import attachment from '../../assets/img/attachment.svg';




const Chat = () => {
    return (
        <ChatWrapper>
            <div className='left'><img src={socialIcon} alt="social" /></div>
            <div className='center'>
                <h4>Zarela Reed</h4>
                <h5>Used Electronic Test Equipment Not Working in the
                        </h5>
                <h6>Hello guys, i have been unable to make use of</h6>
            </div>
            <div className='right'>
                <div className='right__time'>19hrs</div>
                <div className='right__unread'>2</div>
                <div className='right__clip'><img src={attachment} alt="attachment" /></div>
            </div>
        </ChatWrapper>
    )
};

export default Chat;