import "../Login/Login.css";
import styled from "styled-components";
import { AccountBox } from "../Login/accountBox";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
//more component
import HeaderLinks from "../../components/Header/HeaderLinks";
import image from "../../assets/img/bg7.jpg";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer/Footer";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";



const useStyles = makeStyles(styles);
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:20px;
`;

  function Login(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
      <>
        <Header
          fixed
          color="transparent"
          brand="CodeHub"
          rightLinks={<HeaderLinks />}
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
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>

                      <AppContainer>
                        <AccountBox />
                    </AppContainer>
              </GridItem>
              </GridContainer>
            </div>
            <Footer/>
          </div>
          
      </>
      
    );
  }

export default Login;
