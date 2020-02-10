import React from 'react';
import styled from 'styled-components';
import socialIcon from '../assets/img/social-icon.svg';
import attachment from '../assets/img/attachment.svg';


const ChatWrapper = styled.div`
display: flex;
padding-bottom: 13px;
margin-bottom: 13px;
border-bottom: 1px solid #EFF3F5;

.left{
    margin-right: 8px;
}

.center{
    flex: 1;

    h4{
        margin-bottom: 5px;
    }

    h5{
        margin-bottom: 5px;
    }

    h6{
        opacity: 0.75;
    }
}

.right{

    &__time{
        font-size: 10px;
        color: #5e6c84;
        margin-bottom: 9px;
    }

    &__unread{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9.2px;
        background-color: #6554c0;
        color: #ffffff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-left: auto;
        margin-bottom: 9px;
    }

    &__clip{
        width: 13px;
        height: 13px;
        object-fit: contain;
        opacity: 0.75;
        margin-left: auto;
    }
}
`;

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