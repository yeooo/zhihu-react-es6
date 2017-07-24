import React from 'react';
import {Router, Route, hashHistory, IndexRoute,Link} from 'react-router';
//引入模块,然后按需加载
const Home = (location, cb) => require.ensure([], () => cb(null, require('../views/home/home').default), 'Home');
const Article = (location, cb) => require.ensure([], () => cb(null, require('../views/article/article').default), 'Article');

const RootRouter = (
    <Router history={hashHistory}>
         <Route path="/"> 
            <IndexRoute  getComponent={Home} /> 
            <Route path="/home" getComponent={Home} />
            <Route path="/article" getComponent={Article} />
         </Route> 
    </Router>
);

export default RootRouter;