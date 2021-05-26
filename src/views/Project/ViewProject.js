import React from 'react';
import styles from "../../assets/jss/material-kit-react/views/viewproject";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import { makeStyles } from "@material-ui/core/styles";
// import GridContainer from '../../components/Grid/GridContainer';
// import GridItem from '../../components/Grid/GridItem';
// import image from '../../assets/img/bg7.jpg';
// import FullWidthTabs from '../../components/Compiler/FullWidthTabs'
// import Files from '../../components/Files/Files';
import Compiler from '../Compiler/Compiler'
const useStyles = makeStyles(styles);


export default function ViewProject(props) {
    const classes = useStyles();    
    const { ...rest } = props;
    return (
        <>
        <div>
            <Header
                brand="CodeHub"
                rightLinks={<HeaderLinks/>}
                {...rest}

            />
        </div>
        <div className={classes.main}>
            {/* <GridContainer className={classes.container}>
                <GridItem xs={12} sm={12} md={7} className={classes.codesection, classes.borderRight}>
                    <img src={image} className={classes.img}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                    <GridItem>
                        <GridContainer >
                            <Files/>
                        </GridContainer>
                    </GridItem>
                </GridItem>
                <GridItem className={classes.borderBottom}>
                        <GridContainer className={classes.sideSectionUpper}>
                            <FullWidthTabs/>
                        </GridContainer>
                    </GridItem>
            </GridContainer> */}
            <Compiler/>
        </div>
            
        <Footer/>        
        </>
    )
}
