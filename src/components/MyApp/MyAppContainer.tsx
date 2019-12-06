import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles } from '@material-ui/core';

const style = createStyles({
    myAppContainer: {
        margin: '0 !important',
        width: 'unset'
    }
});

function MyAppContainer(props: any) {
    const { classes, children, ...rest } = props;

    return (
        <div className={classes.myAppContainer} {...rest}>
            { children }
        </div>
    );
}

export default withStyles(style)(MyAppContainer);
