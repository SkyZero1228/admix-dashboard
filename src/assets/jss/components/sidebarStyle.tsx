import {
  hexToRgb,
  whiteColor,
  defaultFont,
  boxShadow,
  drawerWidth
} from '../global';

import { createStyles, Theme } from '@material-ui/core';

const sidebarStyle = (theme: Theme) => createStyles({
  drawerPaper: {
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: 1,
    ...boxShadow,
    width: drawerWidth,
    background: 'linear-gradient(to bottom, #033597 0%,#2989d8 50%,#207cca 51%,#48b2bb 100%)'
  },
  logo: {
    position: 'relative',
    padding: '15px 15px',
    zIndex: 4,
    margin: 'auto'
  },
  logoLink: {
    ...defaultFont,
    textTransform: 'uppercase',
    padding: '5px 0',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: 400,
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: whiteColor
    }
  },
  logoLinkRTL: {
    textAlign: 'right'
  },
  logoImage: {
    width: '30px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '10px',
    marginRight: '15px'
  },
  img: {
    width: '35px',
    top: '22px',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0'
  },
  background: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#043797',
      opacity: .4
    }
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset'
  },
  item: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: whiteColor
    }
  },
  itemLink: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '10px 2px 0',
    borderRadius: '3px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    ...defaultFont
  },
  itemIcon: {
    width: '32px',
    height: '32px',
    fontSize: '24px',
    lineHeight: '30px',
    float: 'left',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'rgba(' + hexToRgb(whiteColor) + ', 0.8)'
  },
  itemIconRTL: {
    marginRight: '3px',
    marginLeft: '15px',
    float: 'right'
  },
  itemText: {
    ...defaultFont,
    margin: '0',
    lineHeight: '30px',
    fontSize: '14px',
    color: whiteColor
  },
  itemTextRTL: {
    textAlign: 'right'
  },
  whiteFont: {
    color: whiteColor
  },
  sidebarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '100px',
    zIndex: 4,
    overflowScrolling: 'touch'
  },
  activePro: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      width: '100%',
      bottom: '13px'
    }
  }
});

export default sidebarStyle;
