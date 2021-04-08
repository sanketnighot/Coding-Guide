import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
//import components
import Header from "../../components/Header/Header";
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from "../../assets/img/bg7.jpg";

import styles from "../../assets/jss/material-kit-react/views/exampleStyle";
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import { card } from '../../assets/jss/material-kit-react';
const useStyles = makeStyles(styles);

export default function Contact(props) {
    const classes = useStyles();    
    const { ...rest } = props;
    return (
        <>
                <Header
                    // color="transparent"
                    brand="CodeHub"
                    rightLinks={<HeaderLinks/>}
                    {...rest}
                />
                <div classes={classes.main, classes.mainRaised}>
                    <div className={classes.section}>
                        <div className={classes.container} >
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.nusta}>
                                    <p>ufgbuierfuiwerbg</p>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4} >
                                    <GridItem xs={12} sm={12} md={12} className={classes.rada}>
                                        <card/>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12} className={classes.nusta}>
                                        <p>efbuffwsf</p>
                                    </GridItem>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
