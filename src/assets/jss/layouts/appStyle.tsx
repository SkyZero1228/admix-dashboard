import {
  drawerWidth,
  transition,
  container
} from '../global';
import { createStyles, Theme } from '@material-ui/core';
  
const appStyle = (theme: Theme) => createStyles({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh'
  },
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: '#f0f3f7',
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
    marginTop: '20px',
    padding: '30px 80px',
    minHeight: 'calc(100vh - 123px)'
  },
  container,
  map: {
    marginTop: '70px'
  }
});
  
export default appStyle;
  