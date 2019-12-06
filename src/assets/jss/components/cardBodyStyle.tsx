import {
    pageFontColor,
    whiteColor
} from '../global';
import { createStyles } from '@material-ui/core';
  
const cardBodyStyle = createStyles({
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px',
        alignItems: 'start',
        paddingBottom: '20px'
    },
    numberUnitBody: {
        display: 'flex'
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    flexDirectionRowReverse: {
        flexDirection: 'row-reverse'
    },
    verticalAlignTop: {
        alignItems: 'start'
    },
    verticalAlignBottom: {
        alignItems: 'baseline'
    },
    verticalAlignCenter: {
        alignItems: 'center'
    },
    bodyText: {
        color: pageFontColor,
        padding: '0 3px',
        margin: 0,
        fontWeight: 800
    },
    bodyNumberText: {
        textTransform: 'uppercase',
        fontSize: '38px',
        lineHeight: '28px'
    },
    bodyUnitText: {
        textTransform: 'uppercase',
        fontSize: '23px',
        lineHeight: '16px'
    },
    percentText: {
        color: whiteColor,
        fontSize: '12px',
        padding: '3px 4px',
        marginLeft: '5px',
        borderRadius: '3px'
    },
    positive: {
        backgroundColor: '#59a800'
    },
    negative: {
        backgroundColor: '#c62828'
    }
});
  
export default cardBodyStyle;
  