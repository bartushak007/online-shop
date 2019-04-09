import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faSign, faHorseHead, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import * as serviceWorker from './serviceWorker';

library.add(faSign, faAdjust, faIgloo, faHorseHead, faReact);

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
