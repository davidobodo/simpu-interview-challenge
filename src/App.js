import React from 'react';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Body from './layouts/body';

import styled from 'styled-components';

const Container = styled.div`

  .container__body{
    display:flex;

    @media(max-width: 765px){
      height: calc(100vh - 42px);
    }
  }

`;

const App = () => {
  return (
    <Container>
      <Header />
      <div className='container__body'>
        <SideBar />
        <Body />
      </div>
    </Container>
  );
};

export default App;
