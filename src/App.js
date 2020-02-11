import React from 'react';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Body from './layouts/body';

import styled from 'styled-components';

const AppWrapper = styled.div`

  .appWrapper__body{
    display:flex;
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
