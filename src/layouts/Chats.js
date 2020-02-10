import React from 'react';
import styled from 'styled-components';


const ChatsWrapper = styled.div`
    border-right: 1px solid #EFF3F5;
    width: 405px;
    height: 100%;

    nav{
        padding: 14px 21px;
        border-bottom: 1px solid #EFF3F5;

        a{
            font-size: 12px;
            color: #595e8a;
            margin-right: 15px;
        }

        a.active{
            color: #6554c0;
            background-color: #f6fafd;
            padding: 2px 11px;
            border-radius: 9px;
        }
    }
`;

const Chats = () => {
    return (
        <ChatsWrapper>
            <nav>
                <a className="active">Open</a>
                <a>Archived</a>
                <a>Snoozed</a>
                <a>Trash</a>
            </nav>
        </ChatsWrapper>
    )
};

export default Chats;