import React from 'react';
import { ChatWindowWrapper } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ActiveChat from '../../../components/activeChat';
import Comments from '../../../components/comments';
import clock from '../../../assets/img/clock.svg';
import dustbin from '../../../assets/img/dustbin.svg';
import options from '../../../assets/img/options.svg';
import more from '../../../assets/img/more.svg';

const ChatWindow = () => {
    return (
        <ChatWindowWrapper>
            <div className="header">
                <div className="header__options">
                    <img src={clock} alt="clock" />
                    <img src={dustbin} alt="dustbin" />
                    <img src={options} alt="options" />
                    <img src={more} alt="more" />
                </div>
                <div className="header__contacts">
                    <div className="header__contacts__img-wrapper">
                        <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                        <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                        <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                    </div>
                    <button>Assign</button>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <div className="body">
                <ActiveChat />
                <Comments />
            </div>
        </ChatWindowWrapper>
    )
};

export default ChatWindow;