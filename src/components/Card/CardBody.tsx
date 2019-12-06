import React from 'react';

import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import PercentText from '../PercentText';

import cardBodyStyle from '../../assets/jss/components/cardBodyStyle';

function CardBody({ ...props }: any) {
  const {
    number,
    unit,
    unitPosition,
    unitVertPosition,
    unitSize,
    percent,
    classes
  } = props;

  var numberUnitClass = classNames({
    [classes.numberUnitBody]: true,
    [classes.flexDirectionRow]: unitPosition === "left",
    [classes.flexDirectionRowReverse]: unitPosition === "right",
    [classes.verticalAlignBottom]: unitVertPosition === "bottom",
    [classes.verticalAlignCenter]: unitVertPosition === "center",
  });

  var unitClass = classNames({
    [classes.bodyText]: true,
    [classes.bodyUnitText]: unitSize === "small",
    [classes.bodyNumberText]: unitSize === "big"
  });
  
  return (
    <div className={classes.cardBody}>
      <div className={numberUnitClass}>
        <p className={unitClass}>{unit}</p>
        <p className={classes.bodyText + ' ' + classes.bodyNumberText}>{number}</p>
      </div>
      <PercentText percent={percent} />
    </div>
  );
}

export default withStyles(cardBodyStyle)(CardBody);
