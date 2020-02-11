import React from 'react';
import { HeaderWrapper } from './style';
import logo from '../../assets/img/logo.svg';


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