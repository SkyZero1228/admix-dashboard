import React, { useState } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import myAppsStyle from '../../assets/jss/views/myAppsStyle';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';

import MyAppContainer from '../../components/MyApp/MyAppContainer';
import MyAppItem from '../../components/MyApp/MyAppItem';

const MyApps = ({ ...props }) => {
    const { classes } = props;
    const [data, setData] = useState(0);

    function handleChange(ev:any) {
        setData(ev.target.value);
    }

    return (
        <div className="pageContainer">
            <div className="flex">
                <p className={classes.pageTitle}>Overview</p>
                <FormControl variant="outlined" className={classes.selectData}>
                    <InputLabel htmlFor="outlined-age-native-simple" className={classes.selectInputLabel}>
                        Select data
                    </InputLabel>
                    <Select
                        native
                        value={data}
                        onChange={handleChange}
                        inputProps={{
                            name: 'data',
                            id: 'outlined-age-native-simple',
                        }}
                        classes={{
                            filled: classes.selectRoot
                        }}
                        className={classes.selectDataCtrl}
                        variant="filled"
                        disableUnderline
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </div>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader headerImage="img/logo192.png" headerText="revenue" />
                            <CardBody number="510" unit="$" unitPosition="left" unitVertPosition="center" unitSize="small" percent="12" />
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader headerImage="img/logo192.png" headerText="impressions" />
                            <CardBody number="12.2" unit="M" unitPosition="right" unitVertPosition="bottom" unitSize="small" percent="8" />
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader headerImage="img/logo192.png" headerText="fill rate" />
                            <CardBody number="37.5" unit="%" unitPosition="right" unitVertPosition="center" unitSize="big" percent="4" />
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader headerImage="img/logo192.png" headerText="ecpm" />
                            <CardBody number="2.7" unit="$" unitPosition="left" unitVertPosition="center" unitSize="small" percent="-5" />
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            <div>
                <div className={classes.viewAllDataWrapper}>
                    <p className={classes.viewAllDataLabel}>VIEW ALL DATA</p>
                    <ArrowDropDownIcon className={classes.arrowDropDown} />
                </div>
            </div>
            <div className={classes.myAppsWrapper}>
                <div className="flex">
                    <p className={classes.myAppsTitle}>My Apps</p>
                    <div className={classes.myAppsIconWrapper}>
                        <FilterListIcon className={classes.myAppsIcon} />
                    </div>
                </div>
                <MyAppContainer>
                    <MyAppItem appIcon="img/unity-icon-6.jpg" appTitle="TrackDemoAWE" price="224" percent="16" status="sandbox" />
                    <MyAppItem appIcon="img/unity-icon-6.jpg" appTitle="RacingDemoAdmix-2" price="224" percent="16" status="off" />
                    <MyAppItem appIcon="img/unity-icon-6.jpg" appTitle="TrackDemoAWE" price="224" percent="16" status="live" />
                    <MyAppItem appIcon="img/unity-icon-6.jpg" appTitle="RacingDemoAdmix-2" price="224" percent="16" status="sandbox" />
                    <MyAppItem appIcon="img/unity-icon-6.jpg" appTitle="RacingDemoAdmix" price="224" percent="16" status="live" />
                </MyAppContainer>
            </div>
        </div>
    );
}

export default withStyles(myAppsStyle)(MyApps);