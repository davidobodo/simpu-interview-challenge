import styled from 'styled-components';

export const ChatsWrapper = styled.div`
    border-right: 1px solid #EFF3F5;
    width: 360px;

    @media(max-width: 765px){
        width: 100%;
    }

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

    section{
        padding: 21px;
    }
`;