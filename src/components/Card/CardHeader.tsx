import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import cardHeaderStyle from '../../assets/jss/components/cardHeaderStyle';

function CardHeader({ ...props }: any) {
  const {
    headerImage,
    headerText,
    classes
  } = props;
  
  return (
    <div className={classes.cardHeader}>
      <img src={headerImage} alt="header" className={classes.headerImage} />
      <p className={classes.headerText}>{headerText}</p>
    </div>
  );
}

export default withStyles(cardHeaderStyle)(CardHeader);
