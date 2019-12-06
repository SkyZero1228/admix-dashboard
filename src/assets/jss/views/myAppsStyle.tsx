import { createStyles, Theme } from '@material-ui/core';
import { 
    pageFontColor,
    pageTitleFont,
    pageBackColor,
    statusLabelColor,
    whiteColor
} from '../global';

const myAppsStyle = (theme: Theme) => createStyles({
    pageTitle: {
        textTransform: 'uppercase',
        margin: 0,
        color: pageFontColor,
        ...pageTitleFont
    },
    selectData: {
        marginLeft: '40px',
        minWidth: 250,
        borderRadius: 0
    },
    selectDataCtrl: {
        backgroundColor: whiteColor,
        border: 'none'
    },
    myAppsTitle: {
        textTransform: 'uppercase',
        color: pageFontColor,
        ...pageTitleFont,
        fontSize: '16px'
    },
    myAppsIconWrapper: {
        marginLeft: '20px',
        padding: '6px 8px',
        backgroundColor: whiteColor,
        borderRadius: '3px'
    },
    myAppsIcon: {
        color: pageFontColor,
        cursor: 'pointer'
    },
    selectRoot: {
        padding: '10px 12px 10px'
    },
    selectInputLabel: {
        top: '-7px',
        color: '#a5b2bb',
        fontSize: '14px',
        fontWeight: 600
    },
    viewAllDataWrapper: {
        margin: '-20px 0 0 0',
        width: '100%',
        borderRadius: '3px',
        backgroundColor: pageBackColor,
        boxShadow: '1px 0px 3px 0 rgba(0, 0, 0, 0.14)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewAllDataLabel: {
        padding: '8px 0',
        margin: '0',
        color: statusLabelColor,
        fontWeight: 600,
        fontSize: '14px'
    },
    arrowDropDown: {
        color: statusLabelColor
    },
    myAppsWrapper: {
        marginTop: '40px'
    }
});

export default myAppsStyle;
