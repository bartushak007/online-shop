import React, {useEffect} from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/layout/Layout';
import ProductsList from './pages/products-list/ProductsList';
import Product from './pages/product/Product';
import Error from './pages/error/Error';
import CardsPage from './pages/cards/CardsPage';
import { fetchProducts } from './redux/actions/index';

const App = props => {
//   useEffect(() => {
//     setTimeout(() => {
//       fetchProducts();
//     }, 0);
//   }, []);
  return (    
    <Layout>
      <Switch>
        <Route path="/" component={ProductsList} exact/>
        <Route path={`/product/:id`} component={Product} />
        <Route path="/Cards" component={CardsPage}/>
        <Route path="*" component={Error}/>                 
      </Switch>          
    </Layout>
  );
}

// const mapStateToProps = state => ({
//   products: state.products.products,  
// })

export default connect(null, {fetchProducts})(App);