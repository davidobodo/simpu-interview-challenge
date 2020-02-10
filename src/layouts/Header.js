import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6554c0;
    color: #ffffff;
    height: 42px;
    padding-left: 20px;
    padding-right: 20px;

    

    .right-section{
        display: flex;
        align-items: center;

        &__letter{
            margin-right: 10px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            opacity: 0.7;
        }

        h4{
            color: #ffffff;
            margin-right: 10px;
            font-weight: 200;
        }

        &__dropdown-symbol{
            border-right: 1px solid #000000;
            border-bottom: 1px solid #000000;
            width: 6px;
            height: 6px;
            transform: rotate(45deg);
        }

    }

    
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={logo} alt="logo" />
            <div className="right-section">
                <span className="right-section__letter">S</span>
                <h4>Organisation Name</h4>
                <span className="right-section__dropdown-symbol"></span>
            </div>
        </HeaderWrapper>
    )
};

export default Header;