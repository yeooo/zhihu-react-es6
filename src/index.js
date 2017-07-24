require('./lib/css/base.css');
require('./lib/js/zepto.min.js');
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//引入基本配置
import './tool/baseConfig';
//路由配置文件
import RootRouter from './router/rootRouter'

ReactDOM.render(RootRouter,document.getElementById('app'));

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
