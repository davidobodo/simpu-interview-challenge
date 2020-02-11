import styled from 'styled-components';

export const BodyWrapper = styled.div`
flex: 1;

h2{
    padding: 21px 0 8px 21px;
    border-bottom: 1px solid #EFF3F5;
}

.body__content{
    display: flex;

    .windows{
        flex: 1;

        &__header{
            display: flex;
            justify-content: space-between;
            padding: 13px 16px 13px 32px;
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
                        margin-left: -5px;

                        &:first-child{
                            margin-left: 0px;
                        }
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
            height: 900px;
        }
    }
}
`;