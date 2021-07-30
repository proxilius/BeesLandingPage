import React from 'react';
import { Navigate } from 'react-router-dom';
import { Navigation } from './components/navigation'
import MainLayout from './Layouts/MainLayout';
import Profile from './Layouts/Profile'


const routes = () => [
  { 
    path: '',
    element: <Navigation />,
    children: [
    { path: 'profile/:id/:name', element: <Profile /> },
    { path: '', element: <MainLayout /> },
    ]
}
];

export default routes;