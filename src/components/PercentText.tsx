import React from 'react';

import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import percentTextStyle from '../assets/jss/components/percentTextStyle';

function PercentText({ ...props }: any) {
  const {
    percent,
    classes
  } = props;

  var percentClass = classNames({
    [classes.percentText]: true,
    [classes.positive]: percent >= 0,
    [classes.negative]: percent < 0
  });
  var percentText: String = percent > 0 ? '+' + percent + '%' : percent + '%';
  
  return (
    <div>
      <p className={percentClass}>{percentText}</p>
    </div>
  );
}

export default withStyles(percentTextStyle)(PercentText);
