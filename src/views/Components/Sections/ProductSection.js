import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShareIcon from '@material-ui/icons/Share';
import CodeIcon from '@material-ui/icons/Code';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import LanguageIcon from '@material-ui/icons/Language';
import BookIcon from '@material-ui/icons/Book';
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea";

import styles from "../../../assets/jss/material-kit-react/components/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk about CodeHub</h2>
          <h5 className={classes.description}>
          In today’s world we require everything online, so these systems provide the best solution to problems like unnecessary installation of any software on his/her end. The proposed system can compile & execute code, test with pre-constructed data. Submitted code may run with restrictions like time limit, memory limits etc.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Interactive Coding"
              description="As a human we help each other to grow platform gives opportunity to all come together and work"
              icon={CodeIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Easy Sharing"
              description="Sharing is caring but always we face problem during sharing our work with others due to some circumstances but its not a problem now"
              icon={ShareIcon}
              iconColor="secondary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Cloud Based Storage"
              description="Having huge amount of data no problem we are here for you and believe you data is our main priority so have faith in us blindly"
              icon={CloudDownloadIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Multi Language Support"
              description="For different language setting up new enviroment is old school now just one click and you ready to go with us..."
              icon={LanguageIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Technical Blogs"
              description="Want to speak? discuss your ideas express your thoughts with millions other whoo share same intrest as you :)g"
              icon={BookIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
