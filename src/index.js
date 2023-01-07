import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Route, Switch, Link } from 'react-router-dom';


import './index.css';
import Nav from './Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav></Nav>
  </React.StrictMode>
);


