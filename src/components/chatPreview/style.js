import styled from 'styled-components';

export const ChatPreviewWrapper = styled.div`
display: flex;
padding-bottom: 13px;
margin-bottom: 13px;
border-bottom: 1px solid #EFF3F5;

&:last-child{
    border-bottom: none;
}

.left{
    margin-right: 8px;
}

.center{
    flex: 1;
    overflow-x: hidden;

    h4{
        margin-bottom: 5px;
    }

    h5{
        margin-bottom: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
    }

    h6{
        opacity: 0.75;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
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