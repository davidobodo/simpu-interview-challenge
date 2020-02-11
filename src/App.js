import React from 'react';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Body from './layouts/body';

import styled from 'styled-components';

const AppWrapper = styled.div`

  .appWrapper__body{
    display:flex;

    @media(max-width: 765px){
      height: calc(100vh - 42px);
    }
  }

`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <div className='appWrapper__body'>
        <SideBar />
        <Body />
      </div>
    </AppWrapper>
  );
};

export default App;
