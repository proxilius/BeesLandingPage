import React from 'react';
import { Navigate } from 'react-router-dom';
import { Navigation } from './components/navBars/navigation'
import MainLayout from './Layouts/MainLayout';
import Profile from './Layouts/Profile'



const routes = (landingPageDataProp) => [
  { 
    path: '',
    element: <Navigation />,
    children: [
    { path: 'profile/:id', element: <Profile data={landingPageDataProp} /> },
    { path: '', element: <MainLayout landingPageData={landingPageDataProp}/> },
    ]
}
];

export default routes;