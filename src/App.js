import React from 'react';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default App;
