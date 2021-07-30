import React, {useState, useEffect, useContext}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import routes from './routes';
import Profile from './Layouts/Profile';



const App = () => {

  const routing = useRoutes(routes())
  return (
    <div>
      {routing}
    </div>
  );
}

export default App
