import React from 'react';
import styled from 'styled-components';


const ChatWindowWrapper = styled.div`
    padding: 19px 35px;
    border-right: 1px solid #EFF3F5;

    h3{
        margin-bottom: 51px;
    }

    .message{
        margin-bottom: 30px;

        h4{
            margin-bottom: 10px;
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

        h6{
            color: #212242;
            opacity: 0.5;
        }
    }

    .received{
        background-color: #6554c0 !important;
        color: #ffffff !important;
    }
`;

const ChatWindow = () => {
    return (
        <ChatWindowWrapper>
            <h3>WhatsApp for Business: Don;t forget to start your free trial</h3>
            <div className="message">
                <h4>Zarela Reed</h4>
                <p>Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div>
                    <h6>12:59pm</h6>
                    <span className="ticks"></span>
                </div>
            </div>
            <div className="message">
                <h4>Zarela Reed</h4>
                <p className="received">Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div>
                    <h6>12:59pm</h6>
                    <span className="ticks"></span>
                </div>
            </div>
            <div className="message">
                <h4>Zarela Reed</h4>
                <p className="received">Having a baby can be a nerve wracking experience for new parents –
                    not the nine months of pregnancy, I’m talking about after the infant
                    is brought home from the hospital. It’s always the same thing, by the
                    time they have their third child they have it all figured out, but with
                    number one it’s a learning thing.</p>
                <div>
                    <h6>12:59pm</h6>
                    <span className="ticks"></span>
                </div>
            </div>
        </ChatWindowWrapper>
    )
};

export default ChatWindow;