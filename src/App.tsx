import React from 'react';
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 调用Provider组件,其他组件才能从store中获取状态 */}
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
