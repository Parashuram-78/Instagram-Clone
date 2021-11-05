import React from "react";
import "./NavBar.css";
import { Grid } from "@material-ui/core";
import insta_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import  Avatar from "@material-ui/core/Avatar";
import pp from "../../images/pp1.png";
function NavBar() {
  return (
    <div>
      <div className="NavBar_barcontent">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <img
              className="navbar_logo"
              src={insta_logo}
              alt="instalogo"
              width="105px"
            />
          </Grid>
          <Grid item xs={3}>
            <input className="navbar_searchbar" text="text" placeholder="Search" />
          </Grid>
          <Grid item xs={3} style={{ display: "flex" }}>
            <img className="navbar_img" src={home} alt="home" width="25px"/>
            <img className="navbar_img" src={message} alt=" message" width="25px"/>
            <img className="navbar_img" src={find} alt="find" width="25px"/>
            <img className="navbar_img" src={react} alt="react" width="25px"/>
            <Avatar className="navbar_img" src={pp} style={{"maxwidth":"30px", "maxHeight":"30px","marginBottom":"10px"}}alt="pp"/>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NavBar;
