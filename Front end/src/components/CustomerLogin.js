import React from "react";
import { CssBaseline, Paper,Grid } from "@material-ui/core";
import HeaderLogin from "./HeaderLogin";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/plain2.jpg"})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    background: "#EBEDEF",
  },
}));
const CustomerLogin = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderLogin />
      <center></center>
      
        <Login name={"Customer"} />
     
    </div>
  );
};

export default CustomerLogin;
