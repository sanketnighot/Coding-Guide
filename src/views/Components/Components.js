import React from 'react';
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//core components
import Header from '../../components/Header/Header'; 
import Parallax from "../../components/Parallax/Parallax";
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer/Footer";
// import Button from "../../components/CustomButtons/Button.js";
import Cube from '../../components/Cube/Cube';

// import Button from "components/CustomButtons/Button.js";

//sections of the page
import HeaderLinks from "../../components/Header/HeaderLinks";
import ProductSection from './Sections/ProductSection';

import styles from "../../assets/jss/material-kit-react/views/components.js";
import SectionPills from './Sections/SectionPills';



const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="CodeHub"
                rightLinks={<HeaderLinks/>}
                fixed
                color="transparent"
                changeColorOnScroll={{
                  height: 400,
                  color: "red"
                }}
                {...rest}
            />

            <Parallax image="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80">
            <div className={classes.container}>
              {/* <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Material Kit React.</h1>
                    <h3 className={classes.subtitle}>HO JA BHAI
                    </h3>
                  </div>
                </GridItem>
              </GridContainer> */}
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <Cube/>
            <ProductSection/>
            <SectionPills/>
          </div>
          <Footer/>
        </div>
    )
}
 