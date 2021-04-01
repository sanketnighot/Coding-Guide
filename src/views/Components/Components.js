import React from 'react';
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//core components
import Header from '../../components/Header/Header';
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
// import Button from "components/CustomButtons/Button.js";

//sections of the page
import HeaderLinks from "../../components/Header/HeaderLinks";


import styles from "../../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);
export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Rohit"
                rightLinks={<HeaderLinks/>}
                
            />
        <Parallax image={require("../../assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  madarchod yeh ho q nahi raha
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
            
        </div>
    )
}
 