import React from 'react';
import styled from 'styled-components';
import analytics from '../../assets/img/analytics.svg';
import comment from '../../assets/img/comment.svg';
import happy from '../../assets/img/happy.svg';
import schedule from '../../assets/img/schedule.svg';

const SideBarWrapper = styled.div`
    background-color: #f6fafd;
    width: 50px;
    padding-top: 30px;

    img{
        width: 20px;
        height: 20px;
        object-fit: contain;
        display: block;
        margin: 0 auto 30px;
    }
`;

const SideBar = () => {

    return (
        <SideBarWrapper>
            <img src={analytics} alt="analytics" />
            <img src={happy} alt="happy" />
            <img src={schedule} alt="schedule" />
            <img src={comment} alt="comment" />
        </SideBarWrapper>
    )
};

export default SideBar;