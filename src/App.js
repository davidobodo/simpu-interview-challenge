import React from 'react';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import Body from './layouts/Body';

import styled from 'styled-components';

const AppWrapper = styled.div`

  .appWrapper__body{
    display:flex;
  }

`



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
