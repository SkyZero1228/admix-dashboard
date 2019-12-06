import {
    blackColor,
    whiteColor,
    hexToRgb
} from '../global';
import { createStyles } from '@material-ui/core';
  
const cardStyle = createStyles({
    card: {
        border: '0',
        margin: '5px 0',
        borderRadius: '0',
        color: 'rgba(' + hexToRgb(blackColor) + ', 0.87)',
        background: whiteColor,
        boxShadow: '1px 0px 3px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        fontSize: '.875rem',
        padding: '10px 30px'
    }
});
  
export default cardStyle;
  