import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
//import components
import Header from "../../components/Header/Header";
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from "../../assets/img/bg4.jpg"

import styles from "../../assets/jss/material-kit-react/views/loginPage";
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles(styles);

export default function Project(props) {
    const classes = useStyles();    
    const { ...rest } = props;
    return (
        <>
                <Header
                    fixed
                    // color="transparent"
                    brand="CodeHub"
                    rightLinks={<HeaderLinks/>}
                    {...rest}
                />
                <div
            className={classes.pageHeader}
            style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
            }}
            >
            <Footer/>
        </div>   
        </>
    )
}
