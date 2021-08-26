import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

import SmoothScroll from 'smooth-scroll'
import { NavBarMobile } from './navbarMobile';
import { NavBarBig } from './navBarForBigScreeen';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  })


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    width:'100%'
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    overflow: 'auto',
    height:'100%',
    width:'100%',
  }
}));



export const Navigation = (props) => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
     
    
    {/* <NavBarMobile/> */}
    <NavBarBig/>


    <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
