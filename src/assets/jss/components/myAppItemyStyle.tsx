import {
    pageFontColor,
    pageBackColor,
    whiteColor,
    statusLabelColor,
    statusBlueColor,
    statusYellowColor,
    statusGreenColor,
    defaultFont
} from '../global';
import { createStyles } from '@material-ui/core';


const myAppItemyStyle = createStyles({
    appItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleWrapper: {
        width: '45%'
    },
    appIcon: {
        width: '32px',
        height: '32px',
        color: pageFontColor
    },
    appTitle: {
        marginLeft: '15px',
        color: pageFontColor,
        ...defaultFont,
        fontWeight: 600,
        fontSize: '16px'
    },
    priceWrapper: {
        width: '15%'
    },
    price: {
        color: pageFontColor,
        ...defaultFont,
        fontWeight: 600,
        fontSize: '14px',
        marginRight: '5px'
    },
    settingsIcon: {
        width: '18px',
        heght: '18px',
        color: pageFontColor,
        backgroundColor: pageBackColor,
        padding: '7px 10px',
        margin: '0 3px',
        cursor: 'pointer',
        borderRadius: '3px'
    },
    settingsWrapper: {
        width: '160px'
    },
    settingsButton: {
        padding: '0',
        minWidth: '38px'
    },
    statusWrapper: {
        width: '25%',
        backgroundColor: pageBackColor,
        height: '38px',
        borderRadius: '2px'
    },
    statusLabel: {
        padding: '9px 18px',
        backgroundColor: pageBackColor,
        margin: '0 3px',
        color: statusLabelColor,
        fontWeight: 600,
        cursor: 'pointer'
    },
    activeStatus: {
        backgroundColor: whiteColor
    },
    activeStatusOff: {
        color: statusBlueColor
    },
    activeStatusSandbox: {
        color: statusYellowColor
    },
    activeStatusLive: {
        color: statusGreenColor
    },
    othersWrapper: {
        padding: '9px 0 9px 18px'
    },
    othersIcon: {
        color: pageFontColor,
        cursor: 'pointer'
    }
});
  
export default myAppItemyStyle;
