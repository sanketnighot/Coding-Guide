import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
//import components
import Header from "../../components/Header/Header";
import HeaderLinks from '../../components/Header/HeaderLinks';
import styles from "../../assets/jss/material-kit-react/views/exampleStyle";
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProjectCard from './ProjectCard';
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
                <div classes={classes.main}>
                    <div className={classes.section}>
                        <div className={classes.container} >
                            <GridContainer justify="center">
                                <GridItem md={6}>
                                <TextField
                                    id="outlined-flexible"
                                    label="Add New Project"
                                    // value={value}
                                    // onChange={handleChange}
                                    variant="outlined"
                                    />
                                <Button className={classes.butt} variant="contained">Add</Button>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.section}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                            </GridContainer>
                            <GridContainer className={classes.space}>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                                <GridItem xs={12} sm={12} md={4}><ProjectCard/></GridItem>
                            </GridContainer>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
