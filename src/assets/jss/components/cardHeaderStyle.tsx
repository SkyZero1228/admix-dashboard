import {
    pageFontColor
} from '../global';
import { createStyles } from '@material-ui/core';
  
const cardHeaderStyle = createStyles({
    cardHeader: {
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '15px'
    },
    headerImage: {
        width: '18px',
        height: '18px',
        backgroundColor: '#f0f3f6s'
    },
    headerText: {
        textTransform: 'uppercase',
        color: pageFontColor,
        fontSize: '15px',
        fontWeight: 500,
        margin: 0,
        paddingLeft: '15px'
    }
});
  
export default cardHeaderStyle;
  