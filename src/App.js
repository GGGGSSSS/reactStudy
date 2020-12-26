import React from 'react';
import ContextPage from './pages/ContextPage';
import ReactReduxPage from './pages/ReactReduxPage';
import ReduxPage from './pages/ReduxPage';

function App() {
  // console.log(<input type='password' placeholder='plz type ur password' />)
  return (
    <div className="App">
      {/* <ReduxPage /> */}
      {/* <ContextPage /> */}
      <ReactReduxPage msg='msg' />
    </div>);
}

export default App;
