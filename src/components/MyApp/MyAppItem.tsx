import React, { useState } from 'react';
import classNames from 'classnames';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/ReportRounded';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Card from '../../components/Card/Card';
import PercentText from '../PercentText';

import myAppItemyStyle from '../../assets/jss/components/myAppItemyStyle';

import { pageFontColor } from '../../assets/jss/global';

const useStylesBootstrap = makeStyles(() => ({
    arrow: {
        color: pageFontColor,
    },
    tooltip: {
        backgroundColor: pageFontColor,
        borderRadius: '2px',
        fontSize: '13px',
        fontWeight: 600,
        padding: '9px 12px'
    },
}));

function BootstrapTooltip(props: TooltipProps) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
}

function MyAppItem({ ...props }: any) {
    const { 
        classes, 
        appIcon,
        appTitle,
        price,
        percent,
        status
    } = props;

    const [active, setActive] = useState(status);

    var offStatusClass = classNames({
        [classes.statusLabel]: true,
        [classes.activeStatus]: active === 'off',
        [classes.activeStatusOff]: active === 'off'
    });

    var sandboxStatusClass = classNames({
        [classes.statusLabel]: true,
        [classes.activeStatus]: active === 'sandbox',
        [classes.activeStatusSandbox]: active === 'sandbox'
    });

    var liveStatusClass = classNames({
        [classes.statusLabel]: true,
        [classes.activeStatus]: active === 'live',
        [classes.activeStatusLive]: active === 'live'
    });

    function toggleStatus(type: String) {
        setActive(type);
    }

    return (
        <Card>
            <div className={classes.appItemWrapper}>
                <div className={classes.flexWrapper + ' ' + classes.titleWrapper}>
                    <img src={appIcon} alt="app" className={classes.appIcon} />
                    <p className={classes.appTitle}>{appTitle}</p>
                </div>
                <div className={classes.flexWrapper + ' ' + classes.priceWrapper}>
                    <p className={classes.price}>${price}</p>
                    <PercentText percent={percent} />
                </div>
                <div className={classes.flexWrapper + ' ' + classes.settingsWrapper}>
                    <BootstrapTooltip title="Edit" placement="top">
                        <Button className={classes.settingsButton}>
                            <SettingsIcon className={classes.settingsIcon} />
                        </Button>
                    </BootstrapTooltip>
                    <ReportIcon className={classes.settingsIcon} />
                    <EqualizerIcon className={classes.settingsIcon} />
                </div>
                <div className={classes.flexWrapper + ' ' + classes.statusWrapper}>
                    <p className={offStatusClass} onClick={ev => toggleStatus('off')}>Off</p>
                    <p className={sandboxStatusClass} onClick={ev => toggleStatus('sandbox')}>Sandbox</p>
                    <p className={liveStatusClass} onClick={ev => toggleStatus('live')}>Live</p>
                </div>
                <div className={classes.flexWrapper + ' ' + classes.othersWrapper}>
                    <MoreHorizIcon className={classes.othersIcon} />
                </div>
            </div>
        </Card>
    );
}

export default withStyles(myAppItemyStyle)(MyAppItem);
