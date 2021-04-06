import React from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
//import components
import Header from "../../components/Header/Header";
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from "../../assets/img/bg4.jpg"
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from "../../assets/jss/material-kit-react/views/components";
import style1 from "../../assets/jss/material-kit-react/components/typographyStyle"

const useStyles = makeStyles(styles);
const typoStyle = makeStyles(style1);
export default function About(props) {
    const classes = useStyles();
    const glasses = typoStyle();
    const { ...rest } = props;
    return (
        <>
                <Header
                    absolute
                    // color="transparent"
                    brand="CodeHub"
                    rightLinks={<HeaderLinks/>}
                    changeColorOnScroll={{
                        height: 400,
                        color: "red"}}
                    {...rest}
                />
                 <div style={{paddingTop:'200px'}} className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.section} id="typography">
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={glasses.typo}>
                                <h2 className={glasses.title}>About Us</h2>
                                <h5 className={glasses.note}>
                                In today’s world we require everything online, so these systems provide the best solution to problems like unnecessary installation of any software on his/her end. The proposed 
                                </h5>
                            </div>
                            <div className={glasses.typo}>
                                <h2 className={glasses.title}>About Us</h2>
                                <h5 className={glasses.note}>
                                In today’s world we require everything online, so these systems provide the best solution to problems like unnecessary installation of any software on his/her end. The proposed system can compile & execute code, test with pre-constructed data. Submitted code may run with restrictions like time limit, memory limits etc.
                                </h5>
                            </div>
                            <div className={glasses.typo}>
                                <h2 className={glasses.title}>About Us</h2>
                                <h5 className={glasses.note}>
                                In today’s world we require everything online, so these systems provide the best solution to problems like unnecessary installation of any software on his/her end. The proposed system can compile & execute code, test with pre-constructed data. Submitted code may run with restrictions like time limit, memory limits etc.
                                </h5>
                            </div>
                            <div className={glasses.typo}>
                                <h2 className={glasses.title}>About Us</h2>
                                <h5 className={glasses.note}>
                                In today’s world we require everything online, so these systems provide the best solution to problems like unnecessary installation of any software on his/her end. The proposed system can compile & execute code, test with pre-constructed data. Submitted code may run with restrictions like time limit, memory limits etc.
                                </h5>
                            </div>
                        </GridItem>
                    </GridContainer>
                    </div>
                </div>
        </>
    )
}
