import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import App from './App';

export const routes = <Layout>
    <Route exact path='/:configID' component={ App } />
</Layout>;