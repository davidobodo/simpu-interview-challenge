import styled from 'styled-components';

export const MessageWrapper = styled.div`
    margin-bottom: 30px;

    .message__header{
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

    .is_user_msg{
        background-color: #6554c0 !important;
        color: #ffffff !important;
    }

    .message__footer{
        display: flex;
        align-items: center;
        
        h6{
            color: #212242;
            opacity: 0.5;
            margin-right: 10px;
        }

        .tick{
            border-right: 2px solid #6554c0;
            border-bottom: 2px solid #6554c0;
            width: 6px;
            height: 14px;
            display: inline-block;
            transform: rotate(45deg);
        }
    }
`