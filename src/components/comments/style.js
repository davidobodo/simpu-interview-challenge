import styled from 'styled-components';

export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 19px 10px;
    flex-shrink: 0;
    flex-basis: 300px;

    h3{
        margin-bottom: 15px;
    }

    .comment-details{
        display: flex;
        margin-bottom: 15px;

        img{
            width 28px;
            height: 28px;
            border-radius: 50%;
            margin-right: 5px;
        }

        h6{
            flex: 1;
            background-color: #f6fafd;
            border-radius: 24px;
            padding: 11px;
        }
    }

    .form-field{
        display: flex;
        align-items: center;
        margin-top: auto;

        img{
            margin-right: 5px;
            width 33px;
            height: 33px;
            border-radius: 50%;
        }

        &__input{
            background-color: #f6fafd;
            border-radius: 24px;
            padding: 4px 11px;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;

            input{
                outline: none;
                border: none;
                background-color: transparent;
                font-size: 12px;
            }

            svg{
                background-color: #6554c0;
                color: #ffffff;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                padding: 6px;
            }
        }

    }
`;