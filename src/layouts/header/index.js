import React from 'react';
import { ContainerHeader } from './style';
import logo from '../../assets/img/logo.svg';


const Header = () => {
    return (
        <ContainerHeader>
            <img src={logo} alt="logo" />
            <div className="right-section">
                <span className="right-section__letter">S</span>
                <h4 className="right-section__org-name">Organisation Name</h4>
                <span className="right-section__dropdown-symbol"></span>
            </div>
        </ContainerHeader>
    )
};

export default Header;