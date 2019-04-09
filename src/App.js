import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';

const App = props => {
  return (    
    <Layout>
      <Home/>
    </Layout>
  );
}

export default App;