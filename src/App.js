import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faSign, faHorseHead, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

library.add(faSign, faAdjust, faIgloo, faHorseHead, faReact);
const App = props => {
  return (    
    <Layout>
      <Home/>
    </Layout>
  );
}

export default App;