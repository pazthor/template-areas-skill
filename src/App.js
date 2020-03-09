import React from 'react';
import logo from './logo.svg';
import './App.css';

import Area from './components/Areas/Area';
import WrapperArea from './components/Base/WrapperArea';

function App() {
  return (
     <>
     <WrapperArea>
     <Area></Area>
     </WrapperArea>
     </>
  );
}

export default App;
