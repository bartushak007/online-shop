import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';

const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>    
      </BrowserRouter>       
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
