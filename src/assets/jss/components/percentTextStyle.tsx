import {
    whiteColor
} from '../global';
import { createStyles } from '@material-ui/core';
  
const percentTextStyle = createStyles({
    percentText: {
        color: whiteColor,
        fontSize: '12px',
        padding: '3px 4px',
        margin: '0 0 0 8px',
        borderRadius: '3px',
        fontWeight: 700
    },
    positive: {
        backgroundColor: '#59a800'
    },
    negative: {
        backgroundColor: '#c62828'
    }
});
  
export default percentTextStyle;
  