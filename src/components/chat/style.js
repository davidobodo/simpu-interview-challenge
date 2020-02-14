import styled from 'styled-components';

export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 19px 35px;
    border-right: 1px solid #EFF3F5;

    h3{
        margin-bottom: 51px;
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