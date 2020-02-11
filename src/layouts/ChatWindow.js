import React from 'react';
import styled from 'styled-components';
import attachment from '../assets/img/attachment.svg';
import reply from '../assets/img/reply.svg';


const ChatWindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 19px 35px;
    border-right: 1px solid #EFF3F5;

    h3{
        margin-bottom: 51px;
    }

    .message{
        margin-bottom: 30px;

        &__header{
            display: flex;
            justify-content: space-between;

            h4{
                margin-bottom: 10px;
            }

            .reply{
                color: #6554c0;
                display: flex;
                align-items: center;

                img{
                    margin-right: 5px;
                }
            }

        }

        
        p{
            color: #595e8a;
            background-color: #fbfdff;
            line-height: 1.56;
            border: 0.8px solid #e9edf0;
            padding: 11px 14px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            margin-bottom: 10px;
        }

        &__footer{
            display: flex;
            align-items: center;
            
            h6{
                color: #212242;
                opacity: 0.5;
                margin-right: 10px;
            }

            .tick{

                &__one{
                    border-right: 2px solid #6554c0;
                    border-bottom: 2px solid #6554c0;
                    width: 6px;
                    height: 14px;
                    display: inline-block;
                    transform: rotate(45deg);
                }

                &__two{
                    border-right: 2px solid #6554c0;
                    border-bottom: 2px solid #6554c0;
                    width: 6px;
                    height: 14px;
                    display: inline-block;
                    transform: rotate(45deg);
                }
            }
        }
    }

    .received{
        background-color: #6554c0 !important;
        color: #ffffff !important;
    }

    .input-field{
        padding: 16px;
        border-radius: 10.1px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.04);
        border: solid 0.8px #e9edf0;
        background-color: #ffffff;
        margin-top: auto;

        input{
            display: block;
            background-color: transparent;
            border: none;
            margin-bottom: 16px;
            font-size: 14px;
            outline: none;
            width: 100%;

            ::placeholder{
                color: #595e8a;
            }
        }

        img{
            width: 17px;
            height: 15px;
        }


    }
`;

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