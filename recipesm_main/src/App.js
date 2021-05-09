import React from 'react';
import Main from './Main/Main';
import Menu from './Menu/Menu';
import Scroll from './scroll/Scroll';
import './src.css'

function App() {
  return (
    <div className="App">
      <Menu className='menuApp'></Menu>
      <Scroll className='scrollApp'></Scroll>
      <Main className='mainApp'></Main>
    </div>
  );
}

export default App;
