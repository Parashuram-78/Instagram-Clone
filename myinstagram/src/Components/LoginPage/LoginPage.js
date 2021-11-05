import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import insta_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import playstore from "../../images/play.png";
import appstore from "../../images/app.png";
import "./LoginPage.css";
import SignIN from "../Signin/SignIN";
import Signup from "../SignUp/Signup";
function LoginPage() {
  const[isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="LoginPage_main">
            <div>
              <img src={insta_image} width="454px" alt="play" />
            </div>
            <div>
              <div className="LoginPage_rightcomponent">
                <img className="LoginPage_logo" src={insta_logo} alt="play" />
                <div className="LoginPage_signin">
                  {isLogin ? <SignIN /> : <Signup />}

                  <div className="Login_ordiv">
                    <div className="Login_divider"></div>
                    <div className="Login_or">OR</div>
                    <div className="Login_divider"></div>
                  </div>
                  <div className="Login_fb">
                    <img
                      src={fb}
                      width="15px"
                      style={{ marginRight: "5px" }}
                      alt="play"
                    />
                    Log in with facebook
                  </div>
                  <div className="Login_forgot">Forgot password</div>
                </div>
              </div>
              <div className="LoginPage_signupoption">
                {isLogin ? (
                  <div className="LoginPage_signup">
                    Don't have an account?{" "}
                    <span
                      onClick={() => setIsLogin((prev) => !prev)}
                      style={{ fontWeight: "bold", color: "#0395f6" }}
                    >
                      {" "}
                      SignUp
                    </span>
                  </div>
                ) : (
                  <div className="LoginPage_signin">
                    Have an account?{" "}
                    <span
                      onClick={() => setIsLogin((prev) => !prev)}
                      style={{ fontWeight: "bold", color: "#0395f6" }}
                    >
                      {" "}
                      SignIn
                    </span>
                  </div>
                )}
              </div>
              <div className="LoginPage_downloadSection">
                <div>Get the app</div>
                <div>
                  <img
                    className="LoginPage_dwing"
                    src={appstore}
                    alt="play"
                    width="136px"
                  />
                  <img
                    className="LoginPage_dwing"
                    src={playstore}
                    alt="play"
                    width="136px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
