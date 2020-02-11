import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Chats from '../../components/chats';
import ChatWindow from '../../components/chatWindow';
import Comments from '../../components/comments/index.js';
import { BodyWrapper } from './style';
import clock from '../../assets/img/clock.svg';
import dustbin from '../../assets/img/dustbin.svg';
import options from '../../assets/img/options.svg';
import more from '../../assets/img/more.svg';




const Body = () => {
    return (
        <BodyWrapper>
            <h2>Conversations</h2>
            <div className="body__content">
                <Chats />
                <div className="windows">
                    <div className="windows__header">
                        <div className="windows__header__options">
                            <img src={clock} alt="clock" />
                            <img src={dustbin} alt="dustbin" />
                            <img src={options} alt="options" />
                            <img src={more} alt="more" />
                        </div>
                        <div className="windows__header__contacts">
                            <div className="windows__header__contacts__img-wrapper">
                                <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                                <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                                <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                            </div>
                            <button>Assign</button>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="windows__body">
                        <ChatWindow />
                        <Comments />
                    </div>
                </div>
            </div>
        </BodyWrapper>
    )
};

export default Body;