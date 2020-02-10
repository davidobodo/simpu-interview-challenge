import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Chats from './Chats';
import ChatWindow from './ChatWindow';
import Comments from './Comments';

import clock from '../assets/img/clock.svg';
import dustbin from '../assets/img/dustbin.svg';
import options from '../assets/img/options.svg';
import more from '../assets/img/more.svg';

const BodyWrapper = styled.div`
    flex: 1;

    h2{
        padding: 21px 0 8px 21px;
        border-bottom: 1px solid #EFF3F5;
    }

    .body__content{
        height: calc(100vh - 55px);
        display: flex;

        .windows{
            flex: 1;

            &__header{
                display: flex;
                justify-content: space-between;
                padding: 14px 16px 14px 32px;
                border-bottom: 1px solid #EFF3F5;

                &__options{

                    img{
                        width: 16px;
                        height: 16px;
                        object-fit: contain;
                        margin-right: 20px;
                    }
                }

                &__contacts{
                    display: flex;
                    align-items: center;

                    &__img-wrapper{
                        border: 1px solid #EFF3F5;
                        border-radius: 30px;
                        display: flex;
                        align-items: center;
                        padding: 2px;
                        margin-right: 10px;

                        img{
                            width: 16px;
                            height: 16px;
                            object-fit: cover;
                            border-radius: 50%;
                        }

                    }

                    

                    button{
                        padding: 3px 13px;
                        background-color: transparent;
                        border-radius: 30px;
                        border: 1px solid #EFF3F5;
                        margin-right: 10px;
                    }

                    svg{
                        color: #ffffff;
                        width: 21px;
                        height: 21px;
                        background-color: #e8e5e5;
                        border-radius: 50%;
                    }
                }
            }

            &__body{
                display: flex;
                height: calc(100vh - 104px);
            }
        }
    }
`;

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