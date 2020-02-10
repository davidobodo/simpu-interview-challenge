import React from 'react';
import styled from 'styled-components';
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
                            <button>Assign</button>
                        </div>
                    </div>
                    <div>
                        <ChatWindow />
                        <Comments />
                    </div>
                </div>
            </div>
        </BodyWrapper>
    )
};

export default Body;