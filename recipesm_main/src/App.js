import React from 'react';
import Main from './Main/Main';
import Menu from './Menu/Menu';
// import Scroll from './scroll/Scroll';
import './src.css'

function App() {
  return (
    <div className="App">
      <div>
      <Menu className='menuApp'></Menu>
      </div>
      <div className='mainApp'>
              <Main ></Main>
      </div>
    </div>
  );
}

export default App;
