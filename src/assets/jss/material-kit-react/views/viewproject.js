import { containerFluid } from "../../material-kit-react";

const viewproject = {

    container:{
        ...containerFluid,
        textAlign: "center"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
      },
      section: {
        padding: "70px 0"
      },
      codesection:{
          height:'100vh',
      },
      borderRight:{
        borderRight: '1px solid black'
      },
      img:{
        display: 'block',
        width:'100%',
        height:'100vh',
      },
      borderBottom:{
          borderBottom:'1px solid black'
      },
      sideSectionUpper:{
          height:'50vh',
          width:'100%',
      },
      mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
      },
      content:{
          align:'center'
      }

    

};

export default viewproject;