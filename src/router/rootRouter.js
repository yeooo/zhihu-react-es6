import React from 'react';
import {Router, Route, hashHistory, IndexRoute,Link} from 'react-router';
//引入模块,然后按需加载
const Home = (location, cb) => require.ensure([], () => cb(null, require('../views/home/home').default), 'Home');
const Article = (location, cb) => require.ensure([], () => cb(null, require('../views/article/article').default), 'Article');
const ArticleDetail = (location, cb) => require.ensure([], () => cb(null, require('../views/article/articleDetail').default), 'ArticleDetail');
const Comments = (location, cb) => require.ensure([], () => cb(null, require('../views/article/comments').default), 'Comments');
const Themes = (location, cb) => require.ensure([], () => cb(null, require('../views/theme/theme').default), 'Themes');

const RootRouter = (
    <Router history={hashHistory}>
         <Route path="/"> 
            <IndexRoute  getComponent={Home} /> 
            <Route path="home" getComponent={Home} />
            <Route path="article" getComponent={Article} />
            <Route path="articleDetail(/:id)" getComponent={ArticleDetail} />
            <Route path="comments(/:id)" getComponent={Comments} />
            <Route path="themes(/:id)" getComponent={Themes} />
         </Route> 
    </Router>
);

export default RootRouter;