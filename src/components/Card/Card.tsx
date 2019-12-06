import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import cardStyle from '../../assets/jss/components/cardStyle';

function Card({ ...props }: any) {
  const {
    classes,
    children,
    ...rest
  } = props;
  
  return (
    <div className={classes.card} {...rest}>
      { children }
    </div>
  );
}

export default withStyles(cardStyle)(Card);
