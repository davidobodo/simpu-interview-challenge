import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6554c0;
    color: #ffffff;
    height: 42px;
    padding-left: 20px;
    padding-right: 20px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={logo} alt="logo" />
            <div>
                <h4>Organisation Name</h4>
            </div>
        </HeaderWrapper>
    )
};

export default Header;